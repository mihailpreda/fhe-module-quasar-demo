<template>
  <q-page-sticky position="bottom-right" :offset="[30, 20]">
    <q-btn
      class="q-pa-sm copy-btn"
      round
      color="blue-10"
      icon="mdi-content-copy"
    >
      <q-tooltip :offset="[0, 10]" class="bg-blue-8 q-ma-sm text-white">
        Copy code
      </q-tooltip>
    </q-btn>
  </q-page-sticky>
  <div class="code-container">
    <div
      v-for="(line, index) in code"
      :key="index"
      class="code-lines-container"
    >
      <div class="line-number">{{ index + 1 }}</div>
      <div class="line-code">{{ line }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { HomomorphicScheme } from 'src/types/models';
export default defineComponent({
  name: 'Code',
  components: {},
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    return {
      //
    };
  },
  computed: {
    code() {
      return [
        '(async () => {',
        '    // Pick one for your environment',
        '    // npm install node-seal',
        '    // yarn add node-seal',
        '    //',
        '    // ES6 or CommonJS',
        "    // import SEAL from 'node-seal'",
        "    const SEAL = require('node-seal')",
        '    ',
        '    // Wait for the web assembly to fully initialize',
        '    const seal = await SEAL()',
        '    ',
        '    ////////////////////////',
        '    // Encryption Parameters',
        '    ////////////////////////',
        '    ',
        '    // Create a new EncryptionParameters',
        '    const schemeType = seal.SchemeType.bfv',
        '    const securityLevel = seal.SecurityLevel.tc128',
        '    const polyModulusDegree = 4096',
        '    const bitSizes = [36,36,37]',
        '    const bitSize = 20',
        '    ',
        '    const encParms = seal.EncryptionParameters(schemeType)',
        '',
        '    // Assign Poly Modulus Degree',
        '    encParms.setPolyModulusDegree(polyModulusDegree)',
        '    ',
        '    // Create a suitable set of CoeffModulus primes',
        '    encParms.setCoeffModulus(',
        '      seal.CoeffModulus.Create(',
        '        polyModulusDegree,',
        '        Int32Array.from(bitSizes)',
        '      )',
        '    )',
        '',
        '    // Assign a PlainModulus (only for bfv scheme type)',
        '    encParms.setPlainModulus(',
        '      seal.PlainModulus.Batching(',
        '        polyModulusDegree,',
        '        bitSize',
        '      )',
        '    )',
        '',
        '    ////////////////////////',
        '    // Context',
        '    ////////////////////////',
        '    ',
        '    // Create a new Context',
        '    const context = seal.Context(',
        '      encParms,',
        '      true,',
        '      securityLevel',
        '    )',
        '',
        '    // Helper to check if the Context was created successfully',
        '    if (!context.parametersSet()) {',
        "      throw new Error('Could not set the parameters in the given context. Please try different encryption parameters.')",
        '    }',
        '',
        '    ////////////////////////',
        '    // Keys',
        '    ////////////////////////',
        '    ',
        '    // Create a new KeyGenerator (use uploaded keys if applicable)',
        '    const keyGenerator = seal.KeyGenerator(',
        '      context',
        '    )',
        '',
        '    ////////////////////////',
        '    // Variables',
        '    ////////////////////////',
        '    ',
        '    ////////////////////////',
        '    // Instances',
        '    ////////////////////////',
        '    ',
        '    // Create an Evaluator',
        '    const evaluator = seal.Evaluator(context)',
        '',
        '    // Create a BatchEncoder (only bfv SchemeType)',
        '    const batchEncoder = seal.BatchEncoder(context)',
        '',
        '})()',
      ];
    },
  },
  methods: {
    //
  },
});
</script>
<style lang="scss" scoped>
.code-lines-container {
  display: grid;
  grid-template-columns: 6% 94%;
}
.line-number {
  padding: 0px;
  background: $grey-2;
  text-align: right;
  padding-right: 15px;
  border-right: 1px solid $grey-5;
  border-left: 1px solid $grey-5;
  user-select: none;
}
.line-code {
  padding: 0px;
  background: $grey-1;
  padding-left: 8px;
}
.code-container {
  padding-left: 8px;
  padding-right: 4px;
  padding-bottom: 4px;
}
.copy-btn {
  opacity: 0.5;
}
.copy-btn:hover {
  opacity: 1;
}
</style>
