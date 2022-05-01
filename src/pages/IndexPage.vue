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
import getFheModule from 'easyFHE';

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
    easyFHE.Setup.fastSetup('bfv', 'tc128', 'normal');

    const [publicKey, secretKey] = easyFHE.generateKeys();
    const dataset1: Int32Array = Int32Array.from([1, 2, 3, 4, 5, 6, 7]);
    const dataset2: Int32Array = Int32Array.from([12, 22, 32, 42, 52, 62, 72]);
    const cipher1 = Int32Array.from(easyFHE.encrypt(dataset1, publicKey));
    const cipher2 = Int32Array.from(easyFHE.encrypt(dataset2, publicKey));
    const cipher3 = Int32Array.from(easyFHE.Cipher.add(cipher1, cipher2));
    const result = easyFHE.decrypt(cipher3, secretKey);
    console.log(result);
  },
});
</script>
