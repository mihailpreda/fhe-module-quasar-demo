<template>
  <q-page class="row items-center justify-evenly"> easyFHE Components </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getFheModule, { ProcessingSpeed, Scheme, Security } from 'easyFHE';

export default defineComponent({
  name: 'Components',
  components: {},
  setup() {
    //
    return {};
  },
  async mounted() {
    const easyFHE = await getFheModule();
    await easyFHE.Setup.initialize();
    easyFHE.Setup.fastSetup(Scheme.BFV, Security.TC128, ProcessingSpeed.NORMAL);

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
