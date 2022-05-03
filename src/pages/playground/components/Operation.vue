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

          <div class="grid-operation q-pa-sm encrypted-group">
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
import { defineComponent, Ref, ref } from 'vue';
import getFheModule, {
  Precision,
  ProcessingSpeed,
  Scheme,
  Security,
} from 'easyFHE';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
import { Operation } from 'src/types/models';
export default defineComponent({
  name: 'Operation',
  components: {},
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
    return {
      cardLoading: ref(false),
      operationsSigns,
      homomorphicSchemes,
      currentOperation,
    };
  },
  methods: {
    compute() {
      //
      this.cardLoading = true;
      setTimeout(() => {
        this.cardLoading = false;
      }, 3000);
    },
  },
  async mounted() {
    const easyFHE = await getFheModule();
    await easyFHE.Setup.initialize();
    easyFHE.Setup.fastSetup(
      Scheme.BFV,
      Security.TC128,
      ProcessingSpeed.NORMAL,
      Precision.HIGH
    );

    const [publicKey_i32, secretKey_i32] = easyFHE.generateKeys();
    const data1_i32: Int32Array = Int32Array.from([1, 2, 3, 4, 5, 6, 7]);
    const data2_i32: Int32Array = Int32Array.from([12, 22, 32, 42, 52, 62, 72]);
    const c1_i32 = easyFHE.encrypt(data1_i32, publicKey_i32);
    const c2_i32 = easyFHE.encrypt(data2_i32, publicKey_i32);
    const c3_i32 = easyFHE.Cipher.add(c1_i32.save(), c2_i32.save());
    const result_i32 = easyFHE.decrypt(c3_i32.save(), secretKey_i32);
    console.log('i32', result_i32);

    const [publicKey_u32, secretKey_u32] = easyFHE.generateKeys();
    const data1_u32: Uint32Array = Uint32Array.from([1, 2, 3, 4, 5, 6, 7]);
    const data2_u32: Uint32Array = Uint32Array.from([
      12, 22, 32, 42, 52, 62, 72,
    ]);
    const c1_u32 = easyFHE.encrypt(data1_u32, publicKey_u32);
    const c2_u32 = easyFHE.encrypt(data2_u32, publicKey_u32);
    const c3_u32 = easyFHE.Cipher.add(c1_u32.save(), c2_u32.save());
    const result_u32 = easyFHE.decrypt(c3_u32.save(), secretKey_u32);
    console.log('u32', result_u32);

    easyFHE.Setup.fastSetup(
      Scheme.CKKS,
      Security.TC128,
      ProcessingSpeed.NORMAL
    );

    const [publicKey_f64, secretKey_f64] = easyFHE.generateKeys();
    const data1_f64: Float64Array = Float64Array.from([
      1.1, 2.2, 3.3, 4.4, 5.5, 6.5, 7.4,
    ]);
    const data2_f64: Float64Array = Float64Array.from([
      12.1, 22.1, 32.1, 42.1, 52.1, 62.1, 72.1,
    ]);
    const c1_f64 = easyFHE.encrypt(data1_f64, publicKey_f64);
    const c2_f64 = easyFHE.encrypt(data2_f64, publicKey_f64);
    const c3_f64 = easyFHE.Cipher.add(c1_f64.save(), c2_f64.save());
    const result_f64 = easyFHE.decrypt(c3_f64.save(), secretKey_f64);
    console.log('f64', result_f64);
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
</style>
