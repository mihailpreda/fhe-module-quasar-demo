import { EasyScheme } from 'easyFHE';

import {
  EncryptedOperation,
  HomomorphicScheme,
  Operation,
  ValueType,
} from 'src/types/models';
import { defineComponent, PropType, Ref, ref } from 'vue';

export default defineComponent({
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
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
      operation,
      encOperation,
      ValueType,
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
          return Int32Array.from(intValue);

        case EasyScheme.CKKS:
          return Float64Array.from(floatValue);
        default:
          return Int32Array.from(intValue);
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
          return Int32Array.from(intValue);

        case EasyScheme.CKKS:
          return Float64Array.from(floatValue);
        default:
          return Int32Array.from(intValue);
      }
    },
  },
});
