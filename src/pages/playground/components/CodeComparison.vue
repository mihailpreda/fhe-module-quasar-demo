<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="openCodeComparisonDialog"
      persistent
      :maximized="isFullScreen"
      transition-show="slide-up"
      transition-hide="slide-down"
      full-width
    >
      <q-card class="bg-white text-black">
        <q-bar class="bg-primary text-white">
          <q-space></q-space>
          <q-btn
            dense
            flat
            class="q-pa-md"
            :icon="isFullScreen ? 'mdi-arrow-collapse' : 'mdi-arrow-expand'"
            @click="toggleFullscreen"
          >
            <q-tooltip :offset="[0, 10]" class="bg-primary text-white">{{
              isFullScreen ? 'Minimized' : 'Fullscreen'
            }}</q-tooltip>
          </q-btn>

          <q-btn class="q-pa-md" dense flat icon="close" v-close-popup>
            <q-tooltip :offset="[0, 10]" class="bg-primary text-white">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h5 text-center">Code Comparison</div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="row no-wrap">
            <div class="col easy-FHE">
              <div class="text-subtitle1 text-center q-pb-md">EasyFHE</div>

              <q-scroll-area
                visible
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                :style="{
                  height: isFullScreen ? '40vh' : '30vh',
                }"
                ref="firstRef"
                @scroll="onScrollFirst"
              >
                <Code :scheme="scheme" generatedCode="easy-FHE" />
              </q-scroll-area>
            </div>
            <div class="col node-SEAL">
              <div class="text-subtitle1 text-center q-pb-md">node-SEAL</div>

              <q-scroll-area
                visible
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                :style="{
                  height: isFullScreen ? '40vh' : '30vh',
                }"
                ref="secondRef"
                @scroll="onScrollSecond"
              >
                <Code :scheme="scheme" generatedCode="node-SEAL" />
              </q-scroll-area>
            </div>
          </div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="text-h5 text-center">Metrics</div>
          <q-btn flat icon="mdi-chart-bar" @click="openGraphs">Full screen graphs</q-btn>
          <Graphs :scheme="scheme" />
          <div class="q-ma-sm row">
            <div id="loc-chart" class="col">
              <div class="text-center">Lines of Code</div>
              <VueApexCharts
                type="bar"
                height="250"
                :options="chartOptionsLoC"
                :series="seriesLoC"
              ></VueApexCharts>
            </div>
            <div id="speed-chart" class="col">
              <div class="text-center">Speed</div>
              <VueApexCharts
                type="bar"
                height="250"
                :options="chartOptionsSpeed"
                :series="seriesSpeed"
              ></VueApexCharts>
            </div>
            <div id="memory-chart" class="col">
              <div class="text-center">Memory usage</div>
              <VueApexCharts
                type="bar"
                height="250"
                :options="chartOptionsMemory"
                :series="seriesMemory"
              ></VueApexCharts>
            </div>
          </div>
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
import { QScrollArea } from 'quasar';
import VueApexCharts from 'vue3-apexcharts';
import Code from './Code.vue';
import easyFHECodeMixin from './mixins/easyFHE.code.mixin';
import nodeSealCodeMixin from './mixins/nodeSEAL.code.mixin';
import Graphs from './Graphs.vue';
import { EasyScheme, EasySecurity, EasySpeed, EasyPrecision } from 'easyFHE';
const lightGrey = '#121212';
const normalGrey = '#424242';
const darkerGrey = '#727272';
export default defineComponent({
  name: 'CodeComparison',
  components: { Code, VueApexCharts, Graphs },
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
      openCodeComparisonDialog,
      openGraphsDialog,
      operationSpeedMap,
      setupSpeedMap,
      setupMemoryMap,
      operationMemoryMap,
    } = storeToRefs(playgroundStore);
    const firstRef = ref<QScrollArea>();
    const secondRef = ref<QScrollArea>();
    let ignoreSource = ref('');
    return {
      openCodeComparisonDialog,
      openGraphsDialog,
      isFullScreen: ref(false),
      firstRef,
      secondRef,
      ignoreSource,
      operationSpeedMap,
      setupSpeedMap,
      setupMemoryMap,
      operationMemoryMap,
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
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          type: 'bar',
          height: 250,
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
          categories: ['EasyFHE', 'node-SEAL'],
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Lines of Code (LoC)',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          labels: {
            formatter: function (val: string) {
              return Number.parseFloat(val).toFixed(0) + ' LoC';
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
        annotations: {
          points: [
            // {
            //   x: 'EasyFHE',
            //   y: this.code.stats.easyFHE.loc.total + 5,
            //   marker: {
            //     size: 0,
            //   },
            //   label: {
            //     borderColor: '#775DD0',
            //     text: `${this.code.stats.easyFHE.loc.total} lines`,
            //   },
            // },
            // {
            //   x: 'node-SEAL',
            //   y: this.code.stats.seal.loc.total + 5,
            //   marker: {
            //     size: 0,
            //   },
            //   label: {
            //     borderColor: '#775DD0',
            //     text: `${this.code.stats.seal.loc.total} lines`,
            //   },
            // },
          ],
        },
        dataLabels: {
          enabled: false,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(0);
          },
          style: {
            fontSize: '1.5vw',
            whiteSpace: 'normal',
            colors: ['#FFF'],
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
      };
    },
    seriesLoC() {
      return [
        {
          name: 'Setup',
          data: [this.code.stats.easyFHE.loc.setup, this.code.stats.seal.loc.setup],
          color: lightGrey,
        },
        {
          name: 'Operations',
          data: [
            this.code.stats.easyFHE.loc.operations,
            this.code.stats.seal.loc.operations,
          ],
          color: normalGrey,
        },
        {
          name: 'Deallocation',
          data: [
            this.code.stats.easyFHE.loc.deallocations,
            this.code.stats.seal.loc.deallocations,
          ],
          color: darkerGrey,
        },
      ];
    },
    chartOptionsSpeed() {
      return {
        stroke: {
          colors: ['transparent'],
          width: 10,
        },
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
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          height: 250,
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
        colors: [lightGrey, darkerGrey],
        dataLabels: {
          enabled: false,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(0) + ' ms';
          },
          style: {
            fontSize: '1vw',
            whiteSpace: 'normal',
            colors: ['#FFF'],
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
        xaxis: {
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
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
          showForSingleSeries: true,
        },
        fill: {
          opacity: 1,
        },
      };
    },

    seriesSpeed() {
      return [
        {
          name: 'Processing time',
          data: [
            {
              x: 'EasyFHE',
              y: this.code.stats.easyFHE.speed,
            },
            {
              x: 'node-SEAL',
              y: this.code.stats.seal.speed,
            },
          ],
        },
      ];
    },
    chartOptionsMemory() {
      return {
        stroke: {
          colors: ['transparent'],
          width: 10,
        },
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
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          type: 'bar',
          height: 250,
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
        colors: [lightGrey, darkerGrey],
        dataLabels: {
          enabled: false,
          formatter: function (val: string) {
            return Number.parseFloat(val).toFixed(0) + ' bytes';
          },
          style: {
            fontSize: '0.7vw',
            whiteSpace: 'normal',
            colors: ['#FFF'],
          },
          dropShadow: {
            enabled: true,
            right: 2,
            top: 2,
            opacity: 0.8,
          },
        },
        xaxis: {
          title: {
            text: 'libraries',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Size (kilobytes)',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
            },
          },
          labels: {
            formatter: function (val: string) {
              return Number.parseFloat(val).toFixed(0) + ' bytes';
            },
          },
        },
        legend: {
          position: 'right',
          horizontalAlign: 'left',
          offsetY: 40,
          showForSingleSeries: true,
        },
        fill: {
          opacity: 1,
        },
      };
    },
    seriesMemory() {
      return [
        {
          name: 'Used memory',
          data: [
            {
              x: 'EasyFHE',
              y: this.code.stats.easyFHE.memory,
            },
            {
              x: 'node-SEAL',
              y: this.code.stats.seal.memory,
            },
          ],
        },
      ];
    },
    thumbStyle(): Partial<CSSStyleDeclaration> {
      return {
        right: '4px',
        borderRadius: '7px',
        backgroundColor: '#727272',
        width: '4px',
        opacity: '0.75',
      };
    },
    barStyle(): Partial<CSSStyleDeclaration> {
      return {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#bdbdbd',
        width: '8px',
        opacity: '0.2',
      };
    },
  },
  methods: {
    scroll(source: string, position: number) {
      // if we previously just updated
      // the scroll position, then ignore
      // this update as otherwise we'll flicker
      // the position from one scroll area to
      // the other in an infinite loop
      if (this.ignoreSource === source) {
        this.ignoreSource = '';
        return;
      }

      // we'll now update the other scroll area,
      // which will also trigger a @scroll event...
      // and we need to ignore that one
      this.ignoreSource = source === 'first' ? 'second' : 'first';

      const areaRef = source === 'first' ? this.secondRef : this.firstRef;

      (areaRef as QScrollArea).setScrollPosition('vertical', position);
    },

    onScrollFirst({ verticalPosition }: { verticalPosition: number }) {
      this.scroll('first', verticalPosition);
    },

    onScrollSecond({ verticalPosition }: { verticalPosition: number }) {
      this.scroll('second', verticalPosition);
    },
    toggleFullscreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    openGraphs() {
      this.openGraphsDialog = true;
    },
  },
});
</script>
