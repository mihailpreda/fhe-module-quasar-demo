<template>
  <q-page class="fit column wrap items-start content-start">
    <a :href="source1" target="_blank">HTML a href target _blank</a>
    <vue-pdf-embed ref="pdfRef" :source="source1" :width="pdfWidth" :height="pdfHeight" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';

const pdfRef = ref<typeof VuePdfEmbed>();
const source1 = ref(
  new URL(
    './../../../public/pdf/Prezentare PREDA Mihail Irinel - EasyFHE.pdf',
    import.meta.url
  )
);

const pdfWidth = ref(1920);
const pdfHeight = ref(1080);

const myEventHandler = (e: Event) => {
  const lol: Window = e.target as Window;
  pdfWidth.value = lol.innerWidth;
  pdfHeight.value = lol.innerHeight;
};
const playgroundStore = usePlaygroundStore();
const { leftDrawerOpen } = storeToRefs(playgroundStore);
onMounted(() => {
  leftDrawerOpen.value = false;
});

window.addEventListener('resize', myEventHandler);

onUnmounted(() => {
  window.removeEventListener('resize', myEventHandler);
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}

// .pdf-viewer {
//   background-color: red;
// }

.pdf-viewer > div > canvas {
  height: 100% !important;
  width: 100% !important;
  background-color: red;
}

// .vue-pdf-embed > div > canvas {
//   height: 500px !important;
//   width: 500px !important;
//   background-color: red;
// }
</style>
