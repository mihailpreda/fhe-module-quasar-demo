<template>
  <q-page class="fit column wrap justify-center items-start content-start">
    <q-page-sticky position="bottom-right" :offset="[250, 100]">
      <q-btn
        class="q-pa-lg"
        round
        color="primary"
        icon="add"
        @click="openAddDialog"
      ></q-btn>
    </q-page-sticky>

    <AddScheme v-if="openDialog" class="new-operation" />
    <SchemeBuilder
      :style="{ height: '680px', width: '1016px', minWidth: '1015px' }"
      v-for="(scheme, index) in homomorphicSchemes"
      :key="index"
      :scheme="scheme"
      @addOperation="addOperationToScheme(scheme, $event)"
      @removeScheme="removeSchemeFromPlayground(scheme)"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import AddScheme from './components/AddScheme.vue';
import SchemeBuilder from './components/SchemeBuilder.vue';

import { Operation, HomomorphicScheme } from 'src/types/models';

export default defineComponent({
  name: 'Playground',
  components: { AddScheme, SchemeBuilder },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes, openDialog } = storeToRefs(playgroundStore);
    return {
      homomorphicSchemes,
      openDialog,
    };
  },
  methods: {
    removeSchemeFromPlayground(scheme: HomomorphicScheme) {
      //

      this.homomorphicSchemes = this.homomorphicSchemes.filter(
        (e: HomomorphicScheme) => e.schemeID != scheme.schemeID
      );
      console.log(this.homomorphicSchemes);
    },
    addOperationToScheme(scheme: HomomorphicScheme, operation: Operation) {
      scheme.operations.push(operation);
    },

    openAddDialog() {
      this.openDialog = true;
    },
  },
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}
</style>
