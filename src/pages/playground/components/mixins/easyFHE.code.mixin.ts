import { EasyPrecision, EasyScheme, EasySecurity, EasySpeed } from 'easyFHE';

import {
  GeneratedCodeMap,
  HomomorphicScheme,
  Operation,
  ValueType,
} from 'src/types/models';
import { defineComponent, PropType } from 'vue';
import parametersMixin from './parameters.mixin';

export default defineComponent({
  components: {},
  mixins: [parametersMixin],
  props: {
    scheme: {
      type: Object as PropType<HomomorphicScheme>,
      required: true,
    },
  },
  setup() {
    return {
      ValueType,
    };
  },
  methods: {
    generatedLeftParameter(operation: Operation): string {
      const intValue = Array.from(operation.leftSide.value.split(','), (x) =>
        Number.parseInt(x)
      ).filter((e) => !Number.isNaN(e));
      const floatValue = Array.from(operation.leftSide.value.split(','), (x) =>
        Number.parseFloat(x)
      ).filter((e) => !Number.isNaN(e));
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
          return `Int32Array.from([${intValue.toString()}])`;

        case EasyScheme.CKKS:
          return `Float64Array.from([${floatValue.toString()}])`;
        default:
          return `Int32Array.from([${intValue.toString()}])`;
      }
    },
    generatedRightParameter(operation: Operation): string {
      const intValue = Array.from(operation.rightSide.value.split(','), (x) =>
        Number.parseInt(x)
      ).filter((e) => !Number.isNaN(e));
      const floatValue = Array.from(operation.rightSide.value.split(','), (x) =>
        Number.parseFloat(x)
      ).filter((e) => !Number.isNaN(e));
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
          return `Int32Array.from([${intValue.toString()}])`;

        case EasyScheme.CKKS:
          return `Float64Array.from([${floatValue.toString()}])`;
        default:
          return `Int32Array.from([${intValue.toString()}])`;
      }
    },
  },
  computed: {
    computedScheme() {
      return {
        [EasyScheme.NONE]: 'EasyScheme.NONE',
        [EasyScheme.BFV]: 'EasyScheme.BFV',
        [EasyScheme.BGV]: 'EasyScheme.BGV',
        [EasyScheme.CKKS]: 'EasyScheme.CKKS',
      };
    },
    computedSecurity() {
      return {
        [EasySecurity.TC128]: 'EasySecurity.TC128',
        [EasySecurity.TC192]: 'EasySecurity.TC192',
        [EasySecurity.TC256]: 'EasySecurity.TC256',
      };
    },
    computedSpeed() {
      return {
        [EasySpeed.VERY_FAST]: 'EasySpeed.VERY_FAST',
        [EasySpeed.FAST]: 'EasySpeed.FAST',
        [EasySpeed.NORMAL]: 'EasySpeed.NORMAL',
        [EasySpeed.SLOW]: 'EasySpeed.SLOW',
        [EasySpeed.VERY_SLOW]: 'EasySpeed.VERY_SLOW',
      };
    },
    computedPrecision() {
      return {
        [EasyPrecision.LOW]: 'EasyPrecision.LOW',
        [EasyPrecision.NORMAL]: 'EasyPrecision.NORMAL',
        [EasyPrecision.HIGH]: 'EasyPrecision.HIGH',
      };
    },
    easyFHESetupHeader() {
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
          return {
            code: [
              "<script lang='ts'>",
              '',
              'import getFheModule, {',
              '  EasyScheme,',
              '  EasySecurity,',
              '  EasySpeed,',
              '  FHEModule,',
              "} from 'easyFHE';",
              '',
              '(async () => {',
              '    // Get the WebAssembly module',
              '    const easyFhe: FHEModule = await getFheModule();',
              '    // Initialize it',
              '    await easyFhe.Setup.initialize();',
              '',
              '    // Set your preferred encryption parameters',
              '    easyFhe.Setup.fastSetup(',
              `      ${this.computedScheme[this.scheme.scheme.value]},`,
              `      ${this.computedSecurity[this.scheme.security.value]},`,
              `      ${this.computedSpeed[this.scheme.speed.value]},`,
              '    );',
              '',
              '    // Generate a keypair',
              '    const [publicKey, secretKey] = easyFhe.generateKeys();',
              '',
              '',
              '',
              '    easyFhe.deallocateLibrary();',
              '    publicKey.delete();',
              '    secretKey.delete();',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 25,
          };
        case EasyScheme.CKKS:
          return {
            code: [
              "<script lang='ts'>",
              '',
              'import getFheModule, {',
              '  EasyScheme,',
              '  EasySecurity,',
              '  EasySpeed,',
              '  FHEModule,',
              '  EasyPrecision,',
              "} from 'easyFHE';",
              '',
              '(async () => {',
              '    // Get the WebAssembly module',
              '    const easyFhe: FHEModule = await getFheModule();',
              '    // Initialize it',
              '    await easyFhe.Setup.initialize();',
              '',
              '    // Set your preferred encryption parameters',
              '    easyFhe.Setup.fastSetup(',
              `      ${this.computedScheme[this.scheme.scheme.value]},`,
              `      ${this.computedSecurity[this.scheme.security.value]},`,
              `      ${this.computedSpeed[this.scheme.speed.value]},`,
              `      ${this.computedPrecision[this.scheme.precision.value]},`,
              '    );',
              '',
              '    // Generate a keypair',
              '    const [publicKey, secretKey] = easyFhe.generateKeys();',
              '',
              '    easyFhe.deallocateLibrary();',
              '    publicKey.delete();',
              '    secretKey.delete();',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 26,
          };
        default:
          return {
            code: [
              "<script lang='ts'>",
              '',
              'import getFheModule, {',
              '  EasyScheme,',
              '  EasySecurity,',
              '  EasySpeed,',
              '  FHEModule,',
              "} from 'easyFHE';",
              '',
              '(async () => {',
              '    // Get the WebAssembly module',
              '    const easyFhe: FHEModule = await getFheModule();',
              '    // Initialize it',
              '    await easyFhe.Setup.initialize();',
              '',
              '    // Set your preferred encryption parameters',
              '    easyFhe.Setup.fastSetup(',
              `      ${this.computedScheme[this.scheme.scheme.value]},`,
              `      ${this.computedSecurity[this.scheme.security.value]},`,
              `      ${this.computedSpeed[this.scheme.speed.value]},`,
              '    );',
              '',
              '    // Generate a keypair',
              '    const [publicKey, secretKey] = easyFhe.generateKeys();',
              '',
              '',
              '',
              '    easyFhe.deallocateLibrary();',
              '    publicKey.delete();',
              '    secretKey.delete();',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 25,
          };
      }
    },
    easyFHECodeMap(): GeneratedCodeMap {
      return {
        [`${EasyScheme.BFV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] + rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.add(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] - rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.sub(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] * rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.multiply(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.add(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.add(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.sub(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.sub(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.multiply(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.multiply(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
        },
        [`${EasyScheme.BGV}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] + rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.add(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] - rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.sub(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Int32Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] * rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.multiply(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.add(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.add(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.sub(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.sub(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.multiply(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.multiply(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
        },
        [`${EasyScheme.CKKS}`]: {
          [ValueType.PLAIN]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Float64Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] + rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.add(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Float64Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] - rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.sub(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = ${right};`,
                  `     const maxSize${index} =`,
                  `       leftValue${index}.length > rightValue${index}.length ? leftValue${index}.length : rightValue${index}.length;`,
                  `     const result${index} = Float64Array.from(new Array(maxSize${index}).fill(0));`,
                  `     for (let i = 0; i < result${index}.length; i++) {`,
                  `       result${index}[i] = leftValue${index}[i] * rightValue${index}[i];`,
                  '     }',
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // plaintext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = ${left};`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Plain.multiply(rightValue${index}.save(), leftValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
          [ValueType.CIPHER]: {
            ['+']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.add(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext + ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.add(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.sub(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext - ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.sub(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * plaintext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = ${right};`,
                  `     const encResult${index} = easyFhe.Plain.multiply(leftValue${index}.save(), rightValue${index});`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '     // ciphertext * ciphertext',
                  '     //--------------------------------------',
                  `     const leftValue${index} = easyFhe.encrypt(${left}, publicKey);`,
                  `     const rightValue${index} = easyFhe.encrypt(${right}, publicKey);`,
                  `     const encResult${index} = easyFhe.Cipher.multiply(leftValue${index}.save(), rightValue${index}.save());`,
                  `     const result${index} = easyFhe.decrypt(encResult${index}.save(), secretKey);`,
                  '     //--------------------------------------',
                ];
              },
            },
          },
        },
      };
    },
  },
});
