<template>
  <div class="flex">
    <q-card class="my-card bg-blue-10 text-white q-ma-lg">
      <q-card-section>
        <div class="text-h6">{{ scheme.scheme.fullName }}</div>
        <div class="text-subtitle2">
          {{ scheme?.scheme.description }}
        </div>

        <div class="text-subtitle1 q-pa-sm">Parameters</div>
        <div class="text-subtitle2 elements">
          <q-list dense class="list-parameters">
            <q-item>
              <q-item-section class="icon-avatar" avatar>
                <q-icon color="white" name="mdi-shield-lock"></q-icon>
              </q-item-section>
              <q-item-section
                >EasySecurity: {{ scheme.security.label }}</q-item-section
              >
            </q-item>

            <q-item>
              <q-item-section class="icon-avatar" avatar>
                <q-icon color="white" name="mdi-circle-slice-5"></q-icon>
              </q-item-section>
              <q-item-section
                >Processing speed: {{ scheme.speed.label }}</q-item-section
              >
            </q-item>
            <q-item v-if="scheme.scheme.value === EasyScheme.CKKS">
              <q-item-section class="icon-avatar" avatar>
                <q-icon color="white" name="mdi-chevron-double-up"></q-icon>
              </q-item-section>
              <q-item-section
                >EasyPrecision: {{ scheme.precision.label }}</q-item-section
              >
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <q-card-section
        class="scroll"
        :style="{
          height: '680px',
          width: '1016px',
          minWidth: '1015px',
          maxHeight: '430px',
        }"
      >
        <OperationBuilder
          v-for="(operation, index) in scheme!.operations"
          :key="index"
          :scheme="scheme"
          :easyFHE="easyFHE"
          :publicKey="publicKey"
          :secretKey="secretKey"
          @updateOperation="updateOperationFromCurrentScheme(scheme, $event)"
        />
      </q-card-section>

      <q-separator dark></q-separator>

      <q-card-actions>
        <q-btn flat @click="addOperation" icon="add">Add Operation</q-btn>
        <q-btn flat icon="mdi-file-compare" @click="compareCode"
          >Compare Code</q-btn
        >
        <q-btn flat icon="mdi-delete" @click="removeScheme"
          >Delete Scheme</q-btn
        >
      </q-card-actions>
      <q-inner-loading
        :showing="loadingModule"
        :label-style="{ fontSize: '1.5rem', color: '#1976D2' }"
      >
        <q-spinner-gears size="50px" color="blue-10"></q-spinner-gears>
        <span :style="{ fontSize: '1.5rem', color: '#1976D2' }">
          Initializing module....
        </span>
      </q-inner-loading>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, PropType, ref } from 'vue';
import getFheModule, {
  EasyPublicKey,
  EasyScheme,
  EasySecretKey,
  FHEModule,
} from 'easyFHE';

import { HomomorphicScheme, Operation } from 'src/types/models';
import OperationBuilder from './OperationBuilder.vue';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'SchemeBuilder',
  components: { OperationBuilder },
  emits: ['addOperation', 'removeScheme'],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes } = storeToRefs(playgroundStore);
    return {
      EasyScheme,
      homomorphicSchemes,
      loadingModule: ref(false),
      easyFHE: ref(null) as unknown as FHEModule,
      publicKey: ref(null) as unknown as EasyPublicKey,
      secretKey: ref(null) as unknown as EasySecretKey,
    };
  },
  methods: {
    compareCode() {
      console.log(this.scheme);
    },
    updateOperationFromCurrentScheme(
      scheme: HomomorphicScheme,
      operation: Operation
    ) {
      const index = scheme.operations.findIndex(
        (e: Operation) => e.operator == 'updateOperation'
      );
      scheme.operations[index] = operation;
    },
    removeScheme() {
      this.$emit('removeScheme', this.scheme);
      this.publicKey.delete();
      this.secretKey.delete();
      this.easyFHE.deallocateLibrary();
    },
    addOperation() {
      //
      this.$emit('addOperation', {
        leftHandSide: 999,
        rightHandSide: 9999,
        operator: 'updateOperation',
      });
    },
  },
  async mounted() {
    this.loadingModule = true;
    this.easyFHE = await getFheModule();
    await this.easyFHE.Setup.initialize();
    this.loadingModule = false;
    this.scheme.scheme.value;
    this.easyFHE.Setup.fastSetup(
      this.scheme.scheme.value,
      this.scheme.security.value,
      this.scheme.speed.value,
      this.scheme.precision.value
    );
    const [p, s] = this.easyFHE.generateKeys();
    this.publicKey = markRaw(p);
    this.secretKey = markRaw(s);
  },
  beforeUnmount() {
    this.publicKey.delete();
    this.secretKey.delete();
    this.easyFHE.deallocateLibrary();
  },
});
</script>
<style lang="scss" scoped>
:deep(.q-inner-loading) {
  background: rgba(255, 255, 255, 0.9);
}

.list-parameters {
  display: flex;
}
.icon-avatar {
  // min-width: 0px !important;
  display: contents;
}
</style>
