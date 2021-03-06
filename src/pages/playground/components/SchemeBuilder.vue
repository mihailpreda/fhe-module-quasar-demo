<template>
  <div class="flex">
    <q-card class="my-card bg-grey-9 text-white q-ma-sm">
      <q-card-section>
        <div class="text-h6">{{ scheme.scheme.fullName }}</div>
        <div class="text-subtitle2">
          {{ scheme?.scheme.description }}
        </div>

        <div class="text-subtitle1 row">
          <strong> Parameters</strong>
          <div class="text-subtitle2 elements">
            <q-list dense class="list-parameters">
              <q-item>
                <q-item-section class="icon-avatar" avatar>
                  <q-icon color="white" name="mdi-shield-lock"></q-icon>
                </q-item-section>
                <q-item-section>Security: {{ scheme.security.label }}</q-item-section>
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
                <q-item-section>Precision: {{ scheme.precision.label }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>

      <q-card-section
        class="scroll"
        :style="{
          height: '580px',
          width: '900px',
          minWidth: '900px',
          maxHeight: '330px',
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
        <q-btn
          flat
          icon="mdi-file-compare"
          :disable="!isDisabledCompareCode"
          @click="compareCode"
          >Compare Code</q-btn
        >
        <q-btn flat icon="mdi-delete" @click="removeScheme">Delete Scheme</q-btn>
      </q-card-actions>
      <q-inner-loading
        :showing="loadingModule"
        :label-style="{ fontSize: '1.5rem', color: 'black' }"
      >
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
        <span :style="{ fontSize: '1.5rem', color: 'black' }">
          Initializing module....
        </span>
      </q-inner-loading>
    </q-card>
    <CodeComparison :scheme="scheme" />
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, PropType, ref } from 'vue';
import getEasyFHE, {
  EasyPrecision,
  EasyPublicKey,
  EasyScheme,
  EasySecretKey,
  EasySecurity,
  EasySpeed,
  EasyFHE,
} from 'easyFHE';

import { HomomorphicScheme, Operation } from 'src/types/models';
import OperationBuilder from './OperationBuilder.vue';
import CodeComparison from './CodeComparison.vue';

import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'SchemeBuilder',
  components: { OperationBuilder, CodeComparison },
  emits: ['addOperation', 'removeScheme'],

  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes, openCodeComparisonDialog, setupSpeedMap } =
      storeToRefs(playgroundStore);
    return {
      openCodeComparisonDialog,
      EasyScheme,
      homomorphicSchemes,
      loadingModule: ref(false),
      easyFHE: ref(null) as unknown as EasyFHE,
      publicKey: ref(null) as unknown as EasyPublicKey,
      secretKey: ref(null) as unknown as EasySecretKey,
      isDisabledCompareCode: ref(false),
      setupSpeedMap,
    };
  },
  methods: {
    compareCode() {
      this.openCodeComparisonDialog = true;
    },
    updateOperationFromCurrentScheme(scheme: HomomorphicScheme, operation: Operation) {
      const index = scheme.operations.findIndex(
        (e: Operation) => e.operator == 'updateOperation'
      );
      scheme.operations[index] = operation;
      this.isDisabledCompareCode = true;
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
    setupSpeedBenchmark(startTime: number, endTime: number) {
      const scheme: EasyScheme = this.scheme.scheme.value;
      const security: EasySecurity = this.scheme.security.value;
      const speed: EasySpeed = this.scheme.speed.value;
      const precision: EasyPrecision = this.scheme.precision.value;
      this.setupSpeedMap.easyFhe[`${scheme}`][security][speed][precision] =
        endTime - startTime;
      this.setupSpeedMap.nodeSeal[`${scheme}`][security][speed][precision] =
        endTime - startTime;
    },
  },
  async mounted() {
    this.loadingModule = true;
    const startTime = Date.now();
    this.easyFHE = await getEasyFHE();
    await this.easyFHE.Setup.initialize();
    this.loadingModule = false;

    this.easyFHE.Setup.fastSetup(
      this.scheme.scheme.value,
      this.scheme.security.value,
      this.scheme.speed.value,
      this.scheme.precision.value
    );
    const [p, s] = this.easyFHE.generateKeys();
    this.publicKey = markRaw(p);
    this.secretKey = markRaw(s);
    const endTime = Date.now();

    this.setupSpeedBenchmark(startTime, endTime);
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
