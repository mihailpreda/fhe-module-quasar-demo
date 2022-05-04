import { EasyPublicKey, EasyScheme, EasySecretKey, FHEModule } from 'easyFHE';

import {
  DecryptionMap,
  EncryptedOperation,
  HomomorphicScheme,
  Operation,
  ValueType,
} from 'src/types/models';
import { defineComponent, PropType, Ref, ref } from 'vue';
import parametersMixin from './parameters.mixin';

export default defineComponent({
  components: {},
  mixins: [parametersMixin],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
    easyFHE: {
      type: Object as PropType<FHEModule>,
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
    const operation: Ref<Operation> = ref({
      leftSide: { value: '', type: ValueType.PLAIN },
      operator: '+',
      rightSide: { value: '', type: ValueType.PLAIN },
      result: '?',
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
      showDecrypted: ref(false),
    };
  },
  methods: {
    decryptPlainResult() {
      this.showDecrypted = true;
      this.operation.result = this.encOperation.result;
    },
    decryptCipherResult() {
      const result = this.easyFHE.decrypt(
        this.encOperation.result,
        this.secretKey
      );
      this.showDecrypted = true;
      this.operation.result = result.toString();
    },
  },
  computed: {
    decryptionMap(): DecryptionMap {
      return {
        [`${EasyScheme.BFV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
        },
        [`${EasyScheme.BGV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
        },
        [`${EasyScheme.CKKS}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptPlainResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
            ['*']: {
              [ValueType.PLAIN]: () => {
                this.decryptCipherResult();
              },
              [ValueType.CIPHER]: () => {
                this.decryptCipherResult();
              },
            },
          },
        },
      };
    },
  },
});
