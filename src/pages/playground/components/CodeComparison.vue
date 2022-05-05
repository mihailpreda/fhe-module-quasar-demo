<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="openCodeComparison"
      persistent
      :maximized="isFullScreen"
      transition-show="slide-up"
      transition-hide="slide-down"
      full-width
    >
      <q-card class="bg-white text-black" :style="{}">
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
          <div class="text-h4 text-center">Code Comparison</div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="q-ma-md row no-wrap">
            <div class="col easy-FHE">
              <q-card-section>
                <div class="text-h6 text-center">easyFHE</div>
              </q-card-section>
              <q-scroll-area
                visible
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                :style="{
                  height: isFullScreen ? '60vh' : '25vh',
                }"
                ref="firstRef"
                @scroll="onScrollFirst"
              >
                <Code :scheme="scheme" generatedCode="easy-FHE" />
              </q-scroll-area>
            </div>
            <div class="col node-SEAL">
              <q-card-section>
                <div class="text-h6 text-center">node-seal</div>
              </q-card-section>
              <q-scroll-area
                visible
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                :style="{
                  height: isFullScreen ? '60vh' : '25vh',
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
        <q-card-section class="text-center">
          <div class="text-h4">Statistics</div>
          <div class="q-ma-md row no-wrap">
            <div class="col">Lines of Code</div>
            <div class="col">Lines of Code</div>
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
import { HomomorphicScheme } from 'src/types/models';
import { QScrollArea } from 'quasar';

import Code from './Code.vue';
export default defineComponent({
  name: 'CodeComparison',
  components: { Code },
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { openCodeComparison } = storeToRefs(playgroundStore);
    const firstRef = ref<QScrollArea>();
    const secondRef = ref<QScrollArea>();
    let ignoreSource = ref('');
    return {
      openCodeComparison,
      isFullScreen: ref(false),
      firstRef,
      secondRef,
      ignoreSource,
    };
  },
  computed: {
    thumbStyle(): Partial<CSSStyleDeclaration> {
      return {
        right: '4px',
        borderRadius: '7px',
        backgroundColor: '#027be3',
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
  },
});
</script>
