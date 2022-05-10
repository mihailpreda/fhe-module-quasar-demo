<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="openGraphsDialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
      full-width
    >
      <q-card class="bg-grey-2 text-black">
        <q-bar class="bg-primary text-white">
          <q-space></q-space>
          <q-btn class="q-pa-md" dense flat icon="close" v-close-popup>
            <q-tooltip :offset="[0, 10]" class="bg-primary text-white">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h3 text-center">Metrics</div>
        </q-card-section>
        <q-card-section style="height: '80vh'">
          <q-carousel
            v-model="slide"
            vertical
            transition-prev="slide-down"
            transition-next="slide-up"
            swipeable
            animated
            control-color="black"
            navigation-icon="radio_button_unchecked"
            navigation
            height="80vh"
            class="bg-white text-black shadow-1 rounded-borders"
          >
            <q-carousel-slide name="loc">
              <div class="text-center text-h4">Lines of code comparison</div>
              <div id="loc-chart" :style="{ height: '75vh' }">
                <VueApexCharts
                  width="90%"
                  height="90%"
                  :options="chartOptionsLoC"
                  :series="seriesLoC"
                ></VueApexCharts>
              </div>
            </q-carousel-slide>

            <q-carousel-slide name="speed">
              <div class="text-center text-h4">Speed comparison</div>
              <div id="speed-chart" :style="{ height: '75vh' }">
                <VueApexCharts
                  width="90%"
                  height="90%"
                  :options="chartOptionsSpeed"
                  :series="seriesSpeed"
                ></VueApexCharts>
              </div>
            </q-carousel-slide>

            <q-carousel-slide name="memory">
              <div class="text-center text-h4">Memory usage comparison</div>
              <div id="memory-chart" :style="{ height: '75vh' }">
                <VueApexCharts
                  width="90%"
                  height="90%"
                  :options="chartOptionsMemory"
                  :series="seriesMemory"
                ></VueApexCharts>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { HomomorphicScheme, Operation } from 'src/types/models';
import VueApexCharts from 'vue3-apexcharts';
import easyFHECodeMixin from './mixins/easyFHE.code.mixin';
import nodeSealCodeMixin from './mixins/nodeSEAL.code.mixin';
import { EasyScheme, EasySecurity, EasySpeed, EasyPrecision } from 'easyFHE';
export default defineComponent({
  name: 'CodeComparison',
  components: { VueApexCharts },
  mixins: [easyFHECodeMixin, nodeSealCodeMixin],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const {
      openGraphsDialog,
      operationSpeedMap,
      setupSpeedMap,
      setupMemoryMap,
      operationMemoryMap,
    } = storeToRefs(playgroundStore);

    return {
      openGraphsDialog,
      operationSpeedMap,
      setupSpeedMap,
      setupMemoryMap,
      operationMemoryMap,
      slide: ref('loc'),
    };
  },
  computed: {
    code() {
      const easyFHEStats = {
        setup: 0,
        operations: 0,
        deallocations: 0,
        commentsAndBlankLines: 0,
        total: 0,
      };
      /****************************************************************************/
      const scheme: EasyScheme = this.scheme.scheme.value;
      const security: EasySecurity = this.scheme.security.value;
      const speed: EasySpeed = this.scheme.speed.value;
      const precision: EasyPrecision = this.scheme.precision.value;
      easyFHEStats.setup = this.easyFHESetupHeader.code.length - 3;
      easyFHEStats.deallocations = 3;
      let easyFHETotalSpeed = 0;
      let easyFHETotalMemory = 0;
      this.scheme.operations.forEach((op: Operation, index: number) => {
        const codeBlock = this.easyFHECodeMap[scheme][op.leftSide.type][op.operator][
          op.rightSide.type
        ](op, index);
        easyFHEStats.deallocations += codeBlock.filter((x) =>
          x.includes('delete()')
        ).length;
        easyFHEStats.operations += codeBlock.filter(
          (x) => !x.includes('delete()' || !x.includes('//') || x.trim().length !== 0)
        ).length;
        easyFHEStats.commentsAndBlankLines += codeBlock.filter(
          (x) => x.includes('//') || x.trim().length === 0
        ).length;

        easyFHETotalSpeed +=
          this.operationSpeedMap.easyFhe[`${scheme}`][security][speed][precision][
            op.leftSide.type
          ][op.operator][op.rightSide.type];

        easyFHETotalMemory +=
          this.operationMemoryMap.easyFhe[`${scheme}`][security][speed][precision][
            op.leftSide.type
          ][op.operator][op.rightSide.type];
      });
      easyFHETotalSpeed +=
        this.setupSpeedMap.easyFhe[`${scheme}`][security][speed][precision];

      easyFHETotalMemory +=
        this.setupMemoryMap.easyFhe[`${scheme}`][security][speed][precision];
      /****************************************************************************/
      const sealStats = {
        setup: 0,
        operations: 0,
        deallocations: 0,
        commentsAndBlankLines: 0,
        total: 0,
      };
      /****************************************************************************/
      sealStats.setup = this.nodeSealSetupHeader.code.length - 5;
      sealStats.deallocations = 5;
      let nodeSealTotalSpeed = 0;
      let nodeSealTotalMemory = 0;
      this.scheme.operations.forEach((op: Operation, index: number) => {
        const codeBlock = this.nodeSealCodeMap[scheme][op.leftSide.type][op.operator][
          op.rightSide.type
        ](op, index);
        sealStats.deallocations += codeBlock.filter((x) => x.includes('delete()')).length;
        sealStats.operations += codeBlock.filter(
          (x) => !x.includes('delete()') || !x.includes('//') || x.trim().length !== 0
        ).length;
        sealStats.commentsAndBlankLines += codeBlock.filter(
          (x) => x.includes('//') || x.trim().length === 0
        ).length;

        nodeSealTotalSpeed +=
          this.operationSpeedMap.nodeSeal[`${scheme}`][security][speed][precision][
            op.leftSide.type
          ][op.operator][op.rightSide.type];

        nodeSealTotalMemory +=
          this.operationMemoryMap.nodeSeal[`${scheme}`][security][speed][precision][
            op.leftSide.type
          ][op.operator][op.rightSide.type];
      });
      nodeSealTotalSpeed +=
        this.setupSpeedMap.nodeSeal[`${scheme}`][security][speed][precision];

      nodeSealTotalMemory +=
        this.setupMemoryMap.nodeSeal[`${scheme}`][security][speed][precision];

      easyFHEStats.total =
        easyFHEStats.setup + easyFHEStats.operations + easyFHEStats.deallocations;

      sealStats.total = sealStats.setup + sealStats.operations + sealStats.deallocations;

      return {
        stats: {
          easyFHE: {
            loc: easyFHEStats,
            speed: easyFHETotalSpeed,
            memory: easyFHETotalMemory,
          },
          seal: {
            loc: sealStats,
            speed: nodeSealTotalSpeed,
            memory: nodeSealTotalMemory,
          },
        },
      };
    },
    chartOptionsLoC() {
      return {
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 250,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 450,
            },
          },
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          type: 'bar',
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
          },
        },
        xaxis: {
          categories: ['easyFHE', 'node-SEAL'],
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Number of code lines',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        legend: {
          position: 'right',
          horizontalAlign: 'left',
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(0);
          },
          style: {
            fontSize: '1.5rem',
            colors: ['#FFF'],
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
        annotations: {
          points: [
            {
              x: 'easyFHE',
              y: this.code.stats.easyFHE.loc.total,
              marker: {
                size: 0,
              },
              label: {
                offsetY: -30,
                borderColor: '#775DD0',
                text: `${this.code.stats.easyFHE.loc.total} lines`,
                style: {
                  fontSize: '1rem',
                  offsetY: 20,
                },
              },
            },
            {
              x: 'node-SEAL',
              y: this.code.stats.seal.loc.total,
              marker: {
                size: 0,
              },
              label: {
                offsetY: -30,
                borderColor: '#775DD0',
                text: `${this.code.stats.seal.loc.total} lines`,
                style: {
                  fontSize: '1rem',
                },
              },
            },
          ],
        },
      };
    },
    seriesLoC() {
      return [
        {
          name: 'Setup',
          data: [this.code.stats.easyFHE.loc.setup, this.code.stats.seal.loc.setup],
        },
        {
          name: 'Operations',
          data: [
            this.code.stats.easyFHE.loc.operations,
            this.code.stats.seal.loc.operations,
          ],
        },
        {
          name: 'Deallocation',
          data: [
            this.code.stats.easyFHE.loc.deallocations,
            this.code.stats.seal.loc.deallocations,
          ],
        },
        // {
        //   name: 'Comments & blank lines',
        //   data: [
        //     this.code.stats.easyFHE.commentsAndBlankLines,
        //     this.code.stats.seal.commentsAndBlankLines,
        //   ],
        // },
      ];
    },
    chartOptionsSpeed() {
      return {
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 250,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 450,
            },
          },
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          type: 'bar',

          stacked: false,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            distributed: true,
            dataLabels: {
              position: 'center', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(2) + ' ms';
          },
          style: {
            fontSize: '2rem',
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
        xaxis: {
          categories: ['easyFHE', 'node-SEAL'],
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Time (milliseconds)',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          labels: {
            formatter: function (val: string) {
              return Number.parseFloat(val).toFixed(0) + ' ms';
            },
          },
        },
        legend: {
          position: 'right',
          horizontalAlign: 'left',
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      };
    },
    seriesSpeed() {
      return [
        {
          data: [this.code.stats.easyFHE.speed, this.code.stats.seal.speed],
        },
      ];
    },
    chartOptionsMemory() {
      return {
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 250,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 450,
            },
          },
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          type: 'bar',
          stacked: false,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            distributed: true,
            dataLabels: {
              position: 'center', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(0) + ' bytes';
          },
          style: {
            fontSize: '2rem',
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
        xaxis: {
          categories: ['easyFHE', 'node-SEAL'],
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Number of code lines',
            offsetX: 0,
            offsetY: 0,
            style: {
              // color: undefined,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        legend: {
          position: 'right',
          horizontalAlign: 'left',
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      };
    },
    seriesMemory() {
      return [
        {
          name: 'Setup',
          data: [this.code.stats.easyFHE.memory, this.code.stats.seal.memory],
        },
      ];
    },
  },
  methods: {
    closeGraphs() {
      this.openGraphsDialog = false;
    },
  },
});
</script>
