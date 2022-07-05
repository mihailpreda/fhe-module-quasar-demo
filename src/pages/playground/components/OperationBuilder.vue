<template>
  <q-card class="bg-grey-8 q-mb-sm">
    <q-card-section>
      <q-form @submit="compute">
        <div class="operation-container">
          <div class="grid-operations">
            <div class="grid-operation plain-group">
              <div class="cipher-plaintext-toggle">
                Plaintext
                <q-toggle
                  v-model="operation.leftSide.type"
                  checked-icon="check"
                  color="grey-5"
                  :false-value="ValueType.PLAIN"
                  :true-value="ValueType.CIPHER"
                  keep-color
                  unchecked-icon="clear"
                  :readonly="encOperation.isComputed"
                  :disable="encOperation.isComputed"
                  label="Ciphertext"
                ></q-toggle>
              </div>
              <div class="empty"></div>
              <div class="cipher-plaintext-toggle">
                Plaintext
                <q-toggle
                  v-model="operation.rightSide.type"
                  checked-icon="check"
                  color="grey-5"
                  :false-value="ValueType.PLAIN"
                  :true-value="ValueType.CIPHER"
                  keep-color
                  unchecked-icon="clear"
                  :readonly="encOperation.isComputed"
                  :disable="encOperation.isComputed"
                  label="Ciphertext"
                ></q-toggle>
              </div>
              <div class="empty"></div>
              <div class="empty"></div>
              <q-input
                color="black"
                bg-color="white"
                outlined
                :readonly="encOperation.isComputed"
                class="q-pa-sm lol"
                v-model="operation.leftSide.value"
                :rules="[
                  validateInput,
                  (val) => val.toString().length > 0 || 'Please input at least a number',
                ]"
                label="Left parameter"
              ></q-input>
              <q-select
                bg-color="white"
                outlined
                style="width: 130px"
                class="q-pa-sm"
                v-model="operation.operator"
                :options="operationsSigns"
                label="Operator"
                :disable="encOperation.isComputed"
              ></q-select>

              <q-input
                color="black"
                bg-color="white"
                outlined
                class="q-pa-sm"
                v-model="operation.rightSide.value"
                :readonly="encOperation.isComputed"
                :rules="[
                  validateInput,
                  (val) => val.toString().length > 0 || 'Please input at least a number',
                ]"
                label="Right parameter"
              ></q-input>

              <q-input
                style="width: 50px"
                color="black"
                bg-color="white"
                outlined
                class="q-pa-sm"
                type="text"
                model-value="="
                readonly
              ></q-input>

              <Transition :duration="200" name="nested">
                <div v-if="showDecrypted" class="outer">
                  <q-input
                    color="black"
                    bg-color="white"
                    outlined
                    class="q-pa-sm"
                    type="text"
                    v-model="operation.result"
                    :readonly="encOperation.isComputed"
                    label="Result"
                    input-class="ellipsis"
                  ></q-input>
                </div>
              </Transition>
              <div v-if="!showDecrypted" class="outer">
                <q-input
                  color="black"
                  bg-color="white"
                  outlined
                  class="q-pa-sm"
                  style="visibility: hidden"
                  type="text"
                  v-model="operation.result"
                  label="Result"
                  input-class="ellipsis"
                ></q-input>
              </div>
            </div>
            <Transition :duration="200" name="nested">
              <div v-if="showEncrypted" class="outer">
                <div class="grid-operation encrypted-group inner">
                  <q-input
                    color="black"
                    bg-color="white"
                    outlined
                    class="q-pa-sm"
                    v-model="encOperation.leftSide.value"
                    readonly
                    label="Left parameter"
                    input-class="ellipsis"
                  ></q-input>
                  <q-select
                    bg-color="white"
                    outlined
                    style="width: 130px"
                    class="q-pa-sm"
                    v-model="operation.operator"
                    :options="operationsSigns"
                    label="Operator"
                    readonly
                  ></q-select>
                  <q-input
                    color="black"
                    bg-color="white"
                    outlined
                    class="q-pa-sm"
                    v-model="encOperation.rightSide.value"
                    label="Right parameter"
                    readonly
                    input-class="ellipsis"
                  ></q-input>
                  <q-input
                    style="width: 50px"
                    color="black"
                    bg-color="white"
                    outlined
                    class="q-pa-sm"
                    type="text"
                    model-value="="
                    readonly
                  ></q-input>
                  <q-input
                    color="black"
                    bg-color="white"
                    outlined
                    class="q-pa-sm"
                    type="text"
                    v-model="encOperation.result"
                    readonly
                    label="Result"
                    input-class="ellipsis"
                  ></q-input>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div class="operation-buttons">
          <q-btn flat type="submit" :disable="encOperation.isComputed" icon="mdi-cogs"
            >Compute</q-btn
          >

          <q-btn flat @click="decrypt" :disable="!operation.isComputed" icon="mdi-key"
            >Decrypt</q-btn
          >
        </div>
      </q-form>
      <q-inner-loading
        :showing="computingLoading"
        :label-style="{ fontSize: '1.5rem', color: 'black' }"
      >
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
        <span :style="{ fontSize: '1.5rem', color: 'black' }"> Computing.... </span>
      </q-inner-loading>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';
import {
  EasyPrecision,
  EasyPublicKey,
  EasyScheme,
  EasySecretKey,
  EasySecurity,
  EasySpeed,
  EasyFHE,
} from 'easyFHE';

import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import {
  HomomorphicScheme,
  Operation,
  ValueType,
  EncryptedOperation,
} from 'src/types/models';
import computeMixin from './mixins/compute.mixin';
import decryptMixin from './mixins/decrypt.mixin';

export default defineComponent({
  name: 'OperationBuilder',
  emits: ['updateOperation'],
  components: {},
  mixins: [computeMixin, decryptMixin],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
    easyFHE: {
      type: Object as PropType<EasyFHE>,
      required: true,
    },
    publicKey: {
      type: Object as PropType<EasyPublicKey>,
      required: true,
    },
    secretKey: {
      type: Object as PropType<EasySecretKey>,
      required: true,
    },
  },
  setup() {
    const playgroundStore = usePlaygroundStore();
    const { homomorphicSchemes, operationSpeedMap } = storeToRefs(playgroundStore);

    const operationsSigns = ['+', '-', '*'];
    const operation: Ref<Operation> = ref({
      leftSide: { value: '', type: ValueType.PLAIN },
      operator: '+',
      rightSide: { value: '', type: ValueType.PLAIN },
      result: '?',
      isComputed: false,
    });
    const encOperation: Ref<EncryptedOperation> = ref({
      leftSide: { value: '', type: ValueType.PLAIN },
      operator: '+',
      rightSide: { value: '', type: ValueType.PLAIN },
      result: '?',
      isComputed: false,
    });
    return {
      computingLoading: ref(false),
      showEncrypted: ref(false),
      showDecrypted: ref(false),
      operationsSigns,
      homomorphicSchemes,
      operation,
      encOperation,
      ValueType,
      operationSpeedMap,
    };
  },

  computed: {
    leftParameter() {
      const intValue = Array.from(this.operation.leftSide.value.split(','), (x) =>
        Number.parseInt(x)
      ).filter((e) => !Number.isNaN(e));
      const floatValue = Array.from(this.operation.leftSide.value.split(','), (x) =>
        Number.parseFloat(x)
      ).filter((e) => !Number.isNaN(e));
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
        default:
          return Int32Array.from(intValue);

        case EasyScheme.CKKS:
          return Float64Array.from(floatValue);
      }
    },
    rightParameter() {
      const intValue = Array.from(this.operation.rightSide.value.split(','), (x) =>
        Number.parseInt(x)
      ).filter((e) => !Number.isNaN(e));
      const floatValue = Array.from(this.operation.rightSide.value.split(','), (x) =>
        Number.parseFloat(x)
      ).filter((e) => !Number.isNaN(e));
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
        default:
          return Int32Array.from(intValue);

        case EasyScheme.CKKS:
          return Float64Array.from(floatValue);
      }
    },
  },
  methods: {
    validateInput(value: string): string | boolean | Promise<string | boolean> {
      const reg = /[a-z]/gi;
      return !reg.test(value) || 'Please input only numbers!';
    },
    delay(miliseconds: number) {
      return new Promise((resolve) => setTimeout(resolve, miliseconds));
    },
    processingSpeedBenchmark(startTime: number, endTime: number) {
      const valueTypes = [ValueType.PLAIN, ValueType.CIPHER];
      const operationsSigns = ['+', '-', '*'];
      const scheme: EasyScheme = this.scheme.scheme.value;
      const security: EasySecurity = this.scheme.security.value;
      const speed: EasySpeed = this.scheme.speed.value;
      const precision: EasyPrecision = this.scheme.precision.value;
      for (let leftParamType of valueTypes) {
        for (let sign of operationsSigns) {
          for (let rightParamType of valueTypes) {
            this.operationSpeedMap.easyFhe[`${scheme}`][security][speed][precision][
              leftParamType
            ][sign][rightParamType] += endTime - startTime;
            this.operationSpeedMap.nodeSeal[`${scheme}`][security][speed][precision][
              leftParamType
            ][sign][rightParamType] += endTime - startTime;
          }
        }
      }
    },
    compute() {
      this.computingLoading = true;

      this.$emit('updateOperation', this.operation);
      const s: EasyScheme = this.scheme.scheme.value;
      const p1: ValueType = this.operation.leftSide.type;
      const op = this.operation.operator;
      const p2: ValueType = this.operation.rightSide.type;
      const startTime = Date.now();
      this.computationMap[s][p1][op][p2]();
      const endTime = Date.now();
      this.processingSpeedBenchmark(startTime, endTime);
      this.operation.isComputed = true;
      this.delay(1000)
        .then(() => {
          this.computingLoading = false;
        })
        .then(() => {
          this.delay(300).then(() => {
            this.showEncrypted = true;
          });
        });
    },
    decrypt() {
      const s: EasyScheme = this.scheme.scheme.value;
      const p1: ValueType = this.operation.leftSide.type;
      const op = this.operation.operator;
      const p2: ValueType = this.operation.rightSide.type;
      const startTime = Date.now();
      this.decryptionMap[s][p1][op][p2]();
      const endTime = Date.now();
      this.processingSpeedBenchmark(startTime, endTime);
    },
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

.q-input .text-negative {
  color: rgb(255, 255, 255) !important;
}
.q-field--error .q-field__bottom {
  color: rgb(255, 255, 255) !important;
  color: rgb(255, 255, 255) !important;
}
/************************************************ */
@import './animation.scss';
</style>
