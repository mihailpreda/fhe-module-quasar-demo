<template>
  <q-page class="fit column wrap items-start content-start">
    <div class="fit q-pa-md">
      <VuePdf
        v-for="page in numOfPages"
        :key="page"
        :src="pdfSrc"
        :page="page"
        :enableTextSelection="true"
        :enableAnnotations="true"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props'; // Prop type definitions can also be imported
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { Loading, QSpinnerGears } from 'quasar';

const pdfSrc = ref<VuePdfPropsType['src']>(
  new URL(
    './../../../public/pdf/Prezentare PREDA Mihail Irinel - EasyFHE - Getting Started.pdf',
    import.meta.url
  ).href
);
const numOfPages = ref(0);

const playgroundStore = usePlaygroundStore();
const { leftDrawerOpen } = storeToRefs(playgroundStore);
const timer = ref();
const delay = ref();
const showLoading = (displayedTime: number) => {
  Loading.show({
    spinner: QSpinnerGears,
    message: 'Loading presentation...',
    customClass: 'getting-started-loading',
  });
  timer.value = setTimeout(() => {
    Loading.hide();
    timer.value = void 0;
  }, displayedTime);
};

onMounted(() => {
  leftDrawerOpen.value = false;
  showLoading(2000);
  delay.value = setTimeout(() => {
    const loadingTask = createLoadingTask(pdfSrc.value);
    loadingTask.promise.then((pdf: PDFDocumentProxy) => {
      numOfPages.value = pdf.numPages;
    });
  }, 300);
});
onUnmounted(() => {
  if (timer.value !== void 0) {
    clearTimeout(timer.value);
    clearTimeout(delay.value);
    Loading.hide();
  }
});
</script>
<style lang="scss">
.getting-started-loading > .q-loading__backdrop {
  opacity: 1;
  background-color: $grey-6;
}
</style>
