<template>
  <q-page class="fit column wrap items-start content-start">
    <vue-pdf-embed ref="pdfRef" :source="source1" :width="width" :height="height" />
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
    './../../../public/pdf/Prezentare PREDA Mihail Irinel - EasyFHE.pdf',
    import.meta.url
  )
);

const playgroundStore = usePlaygroundStore();
const { leftDrawerOpen } = storeToRefs(playgroundStore);

onMounted(() => {
  leftDrawerOpen.value = false;
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}
</style>
