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

      <q-card-section style="max-height: 40vh" class="scroll">
        <OperationBuilder
          v-for="(operation, index) in scheme!.operations"
          :key="index"
          :scheme="scheme"
          @addOperation="addOperationToScheme(scheme, $event)"
        />
      </q-card-section>

      <q-separator dark></q-separator>

      <q-card-actions>
        <q-btn flat @click="addOperation" icon="add">Add Operation</q-btn>
        <q-btn flat icon="mdi-file-compare">Compare Code</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import getFheModule, {
  EasyPrecision,
  EasySpeed,
  EasyScheme,
  EasySecurity,
} from 'easyFHE';

// import { usePlaygroundStore } from 'src/stores/playground';
import { HomomorphicScheme, Operation } from 'src/types/models';
import OperationBuilder from './OperationBuilder.vue';
import { usePlaygroundStore } from 'src/stores/playground';
import { storeToRefs } from 'pinia';
export default defineComponent({
  name: 'SchemeBuilder',
  components: { OperationBuilder },
  emits: ['addOperation'],
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
    };
  },
  methods: {
    addOperationToScheme(scheme: HomomorphicScheme, operation: Operation) {
      scheme.operations.push(operation);
    },
    addOperation() {
      //
      this.$emit('addOperation', {
        leftHandSide: 4,
        rightHandSide: 5,
        operator: '+',
      });
    },
  },
  async mounted() {
    const easyFHE = await getFheModule();
    await easyFHE.Setup.initialize();
    easyFHE.Setup.fastSetup(
      EasyScheme.BFV,
      EasySecurity.TC128,
      EasySpeed.NORMAL,
      EasyPrecision.HIGH
    );

    const [publicKey_i32, secretKey_i32] = easyFHE.generateKeys();
    const data1_i32: Int32Array = Int32Array.from([1, 2, 3, 4, 5, 6, 7]);
    const data2_i32: Int32Array = Int32Array.from([12, 22, 32, 42, 52, 62, 72]);
    const c1_i32 = easyFHE.encrypt(data1_i32, publicKey_i32);
    const c2_i32 = easyFHE.encrypt(data2_i32, publicKey_i32);
    const c3_i32 = easyFHE.Cipher.add(c1_i32.save(), c2_i32.save());
    const result_i32 = easyFHE.decrypt(c3_i32.save(), secretKey_i32);
    console.log('i32', result_i32);
  },
});
</script>
<style lang="scss" scoped>
.new-operation {
  height: 200px;
}
.list-parameters {
  display: flex;
}
.icon-avatar {
  // min-width: 0px !important;
  display: contents;
}
</style>
