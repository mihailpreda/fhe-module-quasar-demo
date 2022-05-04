import { EasyPublicKey, EasyScheme, EasySecretKey, FHEModule } from 'easyFHE';

import {
  ComputationMap,
  EncryptedOperation,
  HomomorphicScheme,
  Operation,
  ValueType,
} from 'src/types/models';
import { defineComponent, PropType, Ref, ref } from 'vue';
import parametersMixin from './parameters.mixin';

export default defineComponent({
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
    };
  },

  computed: {
    computationMap(): ComputationMap {
      return {
        [`${EasyScheme.BFV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) +
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.add(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) -
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.sub(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) *
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.multiply(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.add(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.add(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['-']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.sub(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.sub(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.multiply(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.multiply(
                  c1.save(),
                  c2.save()
                );
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
        },
        [`${EasyScheme.BGV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) +
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.add(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) -
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.sub(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number(this.encOperation.leftSide.value) *
                    Number(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.multiply(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.add(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.add(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['-']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.sub(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.sub(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.multiply(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.multiply(
                  c1.save(),
                  c2.save()
                );
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
        },
        [`${EasyScheme.CKKS}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number.parseFloat(this.encOperation.leftSide.value) +
                    Number.parseFloat(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.add(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
            ['-']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number.parseFloat(this.encOperation.leftSide.value) -
                    Number.parseFloat(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.sub(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;

                this.encOperation.result = String(
                  Number.parseFloat(this.encOperation.leftSide.value) *
                    Number.parseFloat(this.encOperation.rightSide.value)
                );
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                this.encOperation.leftSide.value =
                  this.operation.leftSide.value;
                const p1 = this.leftParameter;
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Plain.multiply(c2.save(), p1);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.add(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.add(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['-']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.sub(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.sub(c1.save(), c2.save());
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },

            ['*']: {
              [ValueType.PLAIN]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const p2 = this.rightParameter;

                this.encOperation.rightSide.value =
                  this.operation.rightSide.value;
                this.encOperation.leftSide.value = c1.save();
                const result = this.easyFHE.Plain.multiply(c1.save(), p2);
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
              [ValueType.CIPHER]: () => {
                const c1 = this.easyFHE.encrypt(
                  this.leftParameter,
                  this.publicKey
                );
                const c2 = this.easyFHE.encrypt(
                  this.rightParameter,
                  this.publicKey
                );
                this.encOperation.leftSide.value = c1.save();
                this.encOperation.rightSide.value = c2.save();
                const result = this.easyFHE.Cipher.multiply(
                  c1.save(),
                  c2.save()
                );
                this.encOperation.result = result.save();
                this.encOperation.isComputed = true;
              },
            },
          },
        },
      };
    },
  },
});
