<template>
  <q-page class="fit column wrap items-start content-start">
    <vue-pdf-embed
      ref="pdfRef"
      :source="source1"
      :width="width"
      :height="height"
      @rendered="renderFailed"
      @loaded="loadedPDF"
      @loading-failed="loadingFailed"
    />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { useWindowSize } from 'vue-window-size';

const { width, height } = useWindowSize();
const pdfRef = ref<typeof VuePdfEmbed>();

const source1 = ref(
  new URL(
    './../../../public/pdf/Prezentare PREDA Mihail Irinel - EasyFHE - Getting Started.pdf',
    import.meta.url
  )
);

const playgroundStore = usePlaygroundStore();
const { leftDrawerOpen } = storeToRefs(playgroundStore);
const renderFailed = () => {
  console.log('rendered getting');
};

const loadingFailed = () => {
  console.log('failed loading');
};
const loadedPDF = (e) => {
  console.log(e);
};
onMounted(() => {
  leftDrawerOpen.value = false;
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}

.pdf-viewer > div > canvas {
  height: 100% !important;
  width: 100% !important;
  background-color: red;
}
</style>
