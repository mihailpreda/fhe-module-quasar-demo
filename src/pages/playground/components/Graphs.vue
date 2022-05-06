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
      <q-card class="bg-white text-black">
        <q-bar class="bg-primary text-white">
          <q-space></q-space>
          <q-btn class="q-pa-md" dense flat icon="close" v-close-popup>
            <q-tooltip :offset="[0, 10]" class="bg-primary text-white">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h3 text-center">Code Comparison visualization</div>
        </q-card-section>

        <q-card-section style="height: '80vh'">
          <div class="q-ma-sm row">
            <div id="loc-chart" class="col">
              <div class="text-center text-h4">Lines of Code</div>
              <VueApexCharts
                type="bar"
                height="auto"
                :options="chartOptions"
                :series="series"
              ></VueApexCharts>
            </div>
            <div id="speed-chart" class="col">
              <div class="text-center text-h4">Speed</div>
              <VueApexCharts
                type="bar"
                height="auto"
                :options="chartOptions"
                :series="series"
              ></VueApexCharts>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { HomomorphicScheme, Operation } from 'src/types/models';
import VueApexCharts from 'vue3-apexcharts';
import easyFHECodeMixin from './mixins/easyFHE.code.mixin';
import nodeSealCodeMixin from './mixins/nodeSEAL.code.mixin';
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
    const { openGraphsDialog } = storeToRefs(playgroundStore);

    return {
      openGraphsDialog,
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
      const scheme = this.scheme.scheme.value;
      easyFHEStats.setup = this.easyFHESetupHeader.code.length - 3;
      easyFHEStats.deallocations = 3;
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
      });

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
      });
      easyFHEStats.total =
        easyFHEStats.setup + easyFHEStats.operations + easyFHEStats.deallocations;
      // +easyFHEStats.commentsAndBlankLines;
      sealStats.total = sealStats.setup + sealStats.operations + sealStats.deallocations;
      // +sealStats.commentsAndBlankLines;
      return {
        stats: {
          easyFHE: easyFHEStats,
          seal: sealStats,
        },
      };
    },
    chartOptions() {
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
          type: 'bar',
          height: 'auto',
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
        annotations: {
          points: [
            {
              x: 'easyFHE',
              y: this.code.stats.easyFHE.total + 5,
              marker: {
                size: 0,
              },
              label: {
                borderColor: '#775DD0',
                text: `${this.code.stats.easyFHE.total} lines`,
              },
            },
            {
              x: 'node-SEAL',
              y: this.code.stats.seal.total + 5,
              marker: {
                size: 0,
              },
              label: {
                borderColor: '#775DD0',
                text: `${this.code.stats.seal.total} lines`,
              },
            },
          ],
        },
      };
    },
    series() {
      return [
        {
          name: 'Setup',
          data: [this.code.stats.easyFHE.setup, this.code.stats.seal.setup],
        },
        {
          name: 'Operations',
          data: [this.code.stats.easyFHE.operations, this.code.stats.seal.operations],
        },
        {
          name: 'Deallocation',
          data: [
            this.code.stats.easyFHE.deallocations,
            this.code.stats.seal.deallocations,
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
  },
  methods: {
    closeGraphs() {
      this.openGraphsDialog = false;
    },
  },
});
</script>
