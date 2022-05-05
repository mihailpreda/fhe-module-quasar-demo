<template>
  <q-page-sticky position="bottom-right" :offset="[30, 20]">
    <q-btn class="q-pa-sm copy-btn" round color="blue-10" icon="mdi-content-copy">
      <q-tooltip :offset="[0, 10]" class="bg-blue-8 q-ma-sm text-white">
        Copy code
      </q-tooltip>
    </q-btn>
  </q-page-sticky>
  <div class="code-container">
    <div v-for="(line, index) in code" :key="index" class="code-lines-container">
      <div class="line-number">{{ index + 1 }}</div>
      <div class="line-code" v-html="line"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { HomomorphicScheme, Operation } from 'src/types/models';
import easyFHECodeMixin from './mixins/easyFHE.code.mixin';
import nodeSealCodeMixin from './mixins/nodeSEAL.code.mixin';
export default defineComponent({
  name: 'Code',
  components: {},
  mixins: [easyFHECodeMixin, nodeSealCodeMixin],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
    generatedCode: {
      type: String,
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
      if (this.generatedCode === 'easy-FHE') {
        const header = this.easyFHESetupHeader.code;
        const scheme = this.scheme.scheme.value;
        const code: string[] = [];
        this.scheme.operations.forEach((op: Operation, index: number) => {
          const codeBlock = this.easyFHECodeMap[scheme][op.leftSide.type][op.operator][
            op.rightSide.type
          ](op, index);
          code.push(...codeBlock);
        });
        header.splice(this.easyFHESetupHeader.atIndexToInsert, 0, ...code);
        return header;
      }
      if (this.generatedCode === 'node-SEAL') {
        const header = this.nodeSealSetupHeader.code;
        const scheme = this.scheme.scheme.value;
        const code: string[] = [];
        this.scheme.operations.forEach((op: Operation, index: number) => {
          const codeBlock = this.nodeSealCodeMap[scheme][op.leftSide.type][op.operator][
            op.rightSide.type
          ](op, index);
          code.push(...codeBlock);
        });
        header.splice(this.nodeSealSetupHeader.atIndexToInsert, 0, ...code);
        return header;
      }
      return ['// unable to generate for this library'];
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
