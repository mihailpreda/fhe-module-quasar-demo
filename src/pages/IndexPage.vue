<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import getFheModule, { ProcessingSpeed, Scheme, Security } from 'easyFHE';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
  async mounted() {
    const easyFHE = await getFheModule();
    await easyFHE.initialize();
    easyFHE.Setup.fastSetup(Scheme.BFV, Security.TC128, ProcessingSpeed.NORMAL);

    // const [publicKey, secretKey] = easyFHE.generateKeys();
    // const dataset1: Int32Array = Int32Array.from([1, 2, 3, 4, 5, 6, 7]);
    // const dataset2: Int32Array = Int32Array.from([12, 22, 32, 42, 52, 62, 72]);
    // const cipher1 = easyFHE.encrypt(dataset1, publicKey);
    // const cipher2 = easyFHE.encrypt(dataset2, publicKey);
    // const cipher3 = easyFHE.Cipher.add(cipher1.save(), cipher2.save());
    // const result = easyFHE.decrypt(cipher3.save(), secretKey);
    // console.log(result);

    easyFHE.Setup.fastSetup(
      Scheme.CKKS,
      Security.TC128,
      ProcessingSpeed.NORMAL
    );
    const [publicKey2, secretKey2] = easyFHE.generateKeys();
    const dataset12: Float64Array = Float64Array.from([
      0.3, 0.4, 0.5, 0.6, 0.7,
    ]);
    const dataset22: Float64Array = Float64Array.from([1, 2, 1.5, 3.2, 4]);
    const cipher12 = easyFHE.encrypt(dataset12, publicKey2);
    const cipher22 = easyFHE.encrypt(dataset22, publicKey2);
    const cipher32 = easyFHE.Cipher.add(cipher12.save(), cipher22.save());
    const result2 = easyFHE.decrypt(cipher32.save(), secretKey2);
    console.log(result2);
  },
});
</script>
