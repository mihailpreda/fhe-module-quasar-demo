<template>
  <q-page class="fit column wrap justify-center items-center">
    <q-page-sticky position="top-right" :offset="[15, 15]" :style="{ zIndex: 1 }">
      <q-btn
        class="q-pa-sm"
        round
        color="primary"
        icon="add"
        @click="openAddDialog"
      ></q-btn>
    </q-page-sticky>

    <AddScheme v-if="openDialog" class="new-operation" />
    <SchemeBuilder
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
    const { homomorphicSchemes, openDialog, leftDrawerOpen } =
      storeToRefs(playgroundStore);
    return {
      homomorphicSchemes,
      openDialog,
      leftDrawerOpen,
    };
  },
  methods: {
    removeSchemeFromPlayground(scheme: HomomorphicScheme) {
      this.homomorphicSchemes = this.homomorphicSchemes.filter(
        (e: HomomorphicScheme) => e.schemeID != scheme.schemeID
      );
    },
    addOperationToScheme(scheme: HomomorphicScheme, operation: Operation) {
      scheme.operations.push(operation);
    },

    openAddDialog() {
      this.openDialog = true;
    },
  },
  mounted() {
    this.leftDrawerOpen = false;
  },
  unmounted() {
    this.homomorphicSchemes = [];
  },
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}
</style>
