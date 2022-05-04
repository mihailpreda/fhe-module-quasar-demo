<template>
  <q-card class="bg-blue-9 q-pa-md q-ma-md">
    <q-section>
      <div class="operation-container">
        <div class="grid-operations">
          <div class="grid-operation q-pa-sm plain-group">
            <div class="cipher-plaintext-toggle">
              Plaintext
              <q-toggle
                v-model="currentOperation.leftHandSide.isEncrypted"
                checked-icon="check"
                color="red"
                keep-color
                unchecked-icon="clear"
                label="Ciphertext"
              ></q-toggle>
            </div>
            <div class="empty"></div>
            <div class="cipher-plaintext-toggle">
              Plaintext
              <q-toggle
                v-model="currentOperation.rightHandSide.isEncrypted"
                checked-icon="check"
                color="red"
                keep-color
                unchecked-icon="clear"
                label="Ciphertext"
              ></q-toggle>
            </div>
            <div class="empty"></div>
            <div class="empty"></div>
            <q-input
              color="black"
              bg-color="white"
              outlined
              class="q-pa-sm"
              v-model="currentOperation.leftHandSide.value"
              label="Left parameter"
            ></q-input>
            <q-select
              bg-color="white"
              outlined
              style="width: 130px"
              class="q-pa-sm"
              v-model="currentOperation.operator"
              :options="operationsSigns"
              label="Operator"
            ></q-select>

            <q-input
              color="black"
              bg-color="white"
              outlined
              class="q-pa-sm"
              v-model="currentOperation.rightHandSide.value"
              label="Right parameter"
            ></q-input>

            <q-input
              style="width: 50px"
              color="black"
              bg-color="white"
              outlined
              class="q-pa-sm"
              type="text"
              v-model="currentOperation.equal"
              readonly
            ></q-input>

            <q-input
              color="black"
              bg-color="white"
              outlined
              class="q-pa-sm"
              type="text"
              v-model="currentOperation.result"
              label="Result"
            ></q-input>
          </div>
          <Transition :duration="550" name="nested">
            <div v-if="showEncrypted" class="outer">
              <div class="grid-operation q-pa-sm encrypted-group inner">
                <q-input
                  color="black"
                  bg-color="white"
                  outlined
                  class="q-pa-sm"
                  v-model="currentOperation.leftHandSide.value"
                  label="Left parameter"
                ></q-input>
                <q-select
                  bg-color="white"
                  outlined
                  style="width: 130px"
                  class="q-pa-sm"
                  v-model="currentOperation.operator"
                  :options="operationsSigns"
                  label="Operator"
                ></q-select>
                <q-input
                  color="black"
                  bg-color="white"
                  outlined
                  class="q-pa-sm"
                  v-model="currentOperation.rightHandSide.value"
                  label="Right parameter"
                ></q-input>
                <q-input
                  style="width: 50px"
                  color="black"
                  bg-color="white"
                  outlined
                  class="q-pa-sm"
                  type="text"
                  v-model="currentOperation.equal"
                  readonly
                ></q-input>
                <q-input
                  color="black"
                  bg-color="white"
                  outlined
                  class="q-pa-sm"
                  type="text"
                  v-model="currentOperation.result"
                  label="Result"
                ></q-input>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="operation-buttons">
        <q-btn flat @click="compute" icon="mdi-cogs">Compute</q-btn>
        <q-btn flat @click="compute" icon="mdi-key">Decrypt</q-btn>
      </div>
      <!-- <q-inner-loading
        :showing="cardLoading"
        label="Please wait..."
        label-class="text-grey-10"
        label-style="font-size: 1.4em"
      ></q-inner-loading> -->
      <q-inner-loading :showing="cardLoading" label-class="bg-white">
        <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        Please wait...
      </q-inner-loading>
    </q-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
import getFheModule, { EasyPublicKey, EasySecretKey, FHEModule } from 'easyFHE';

import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import {
  EncryptedOperation,
  HomomorphicScheme,
  Operation,
} from 'src/types/models';
export default defineComponent({
  name: 'OperationBuilder',
  components: {},
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes } = storeToRefs(playgroundStore);

    const operationsSigns = ['+', '-', '*'];
    const currentOperation: Ref<Operation> = ref({
      leftHandSide: { value: 0, isEncrypted: false },
      operator: '+',
      rightHandSide: { value: 0, isEncrypted: false },
      equal: '=',
      result: 0,
    });
    const currentEncryptedOperation: Ref<EncryptedOperation> = ref({
      leftHandSide: { value: '', isEncrypted: false },
      operator: '+',
      rightHandSide: { value: '', isEncrypted: false },
      equal: '=',
      result: '',
    });
    return {
      cardLoading: ref(false),
      showEncrypted: ref(false),
      operationsSigns,
      homomorphicSchemes,
      currentOperation,
      currentEncryptedOperation,
      easyFHE: ref(null) as unknown as FHEModule,
      publicKey: ref(null) as unknown as EasyPublicKey,
      secretKey: ref(null) as unknown as EasySecretKey,
    };
  },
  methods: {
    compute() {
      this.cardLoading = true;
      setTimeout(() => {
        this.cardLoading = false;
      }, 1000);
      [this.publicKey, this.secretKey] = this.easyFHE.generateKeys();

      setTimeout(() => {
        this.showEncrypted = true;
      }, 2000);
    },
  },
  async mounted() {
    this.easyFHE = await getFheModule();
    await this.easyFHE.Setup.initialize();
    this.scheme.scheme.value;
    this.easyFHE.Setup.fastSetup(
      this.scheme.scheme.value,
      this.scheme.security.value,
      this.scheme.speed.value,
      this.scheme.precision.value
    );
  },
});
</script>
<style lang="scss" scoped>
.operation-container {
  display: flex;
  flex-wrap: nowrap;
}
.grid-operations {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.grid-operation {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 28% 16% 26% 6% 23%;
}
.operation-buttons {
  display: block;
  text-align: end;
}

.encrypted-group {
  // visibility: hidden;
}
.empty {
  width: 30px;
  height: 30px;
}
.cipher-plaintext-toggle {
  text-align: center;
}
:deep(.q-inner-loading) {
  background: rgba(255, 255, 255, 0.9);
}

/************************************************ */
@import './animation.scss';
</style>
