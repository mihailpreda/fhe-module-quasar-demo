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
    computedSealScheme() {
      return {
        [EasyScheme.NONE]: 'EasyScheme.NONE',
        [EasyScheme.BFV]: 'EasyScheme.BFV',
        [EasyScheme.BGV]: 'EasyScheme.BGV',
        [EasyScheme.CKKS]: 'EasyScheme.CKKS',
      };
    },
    computedSealSecurity() {
      return {
        [EasySecurity.TC128]: 'EasySecurity.TC128',
        [EasySecurity.TC192]: 'EasySecurity.TC192',
        [EasySecurity.TC256]: 'EasySecurity.TC256',
      };
    },
    computedSealSpeed() {
      return {
        [EasySpeed.VERY_FAST]: {
          polyModulusDegree: 1024,
          bitSizes: '[14]',
          bitSize: 20,
        },
        [EasySpeed.FAST]: {
          polyModulusDegree: 2048,
          bitSizes: '[29]',
          bitSize: 20,
        },
        [EasySpeed.NORMAL]: {
          polyModulusDegree: 4096,
          bitSizes: '[58]',
          bitSize: 20,
        },
        [EasySpeed.SLOW]: {
          polyModulusDegree: 8192,
          bitSizes: '[39, 39, 40]',
          bitSize: 20,
        },
        [EasySpeed.VERY_SLOW]: {
          polyModulusDegree: 16384,
          bitSizes: '[47, 47, 47, 48, 48]',
          bitSize: 20,
        },
      };
    },
    computedSealPrecision() {
      return {
        [EasyPrecision.LOW]: 'Math.pow(2, 10)',
        [EasyPrecision.NORMAL]: 'Math.pow(2, 20)',
        [EasyPrecision.HIGH]: 'Math.pow(2, 30)',
      };
    },
    nodeSealSetupHeader() {
      switch (this.scheme.scheme.value) {
        case EasyScheme.BFV:
        case EasyScheme.BGV:
          return {
            code: [
              "<script lang='ts'>",
              '',
              "import SEAL from 'node-seal';",
              '',
              '(async () => {',
              '    // Wait for the web assembly to fully initialize',
              '    const seal = await SEAL();',
              '',
              '     ////////////////////////',
              '     // Encryption Parameters',
              '     ////////////////////////',

              '     // Create a new EncryptionParameters',
              `    const schemeType = seal.SchemeType.${this.scheme.scheme.value}`,
              `    const securityLevel = seal.SecurityLevel.${this.scheme.security.value}`,
              `    const polyModulusDegree = ${
                this.computedSealSpeed[this.scheme.speed.value].polyModulusDegree
              };`,
              `    const bitSizes = ${
                this.computedSealSpeed[this.scheme.speed.value].bitSizes
              };`,
              `    const bitSize = ${
                this.computedSealSpeed[this.scheme.speed.value].bitSize
              };`,
              '',
              '    // Set the PolyModulusDegree',
              '    const parms = seal.EncryptionParameters(schemeType);',
              '',
              '    // Create a suitable set of CoeffModulus primes',
              '    parms.setCoeffModulus(',
              '         seal.CoeffModulus.Create(polyModulusDegree, Int32Array.from(bitSizes))',
              '    );',
              '',
              '    // Set the PlainModulus to a prime of bitSize 20.',
              '    parms.setPlainModulus(',
              '      seal.PlainModulus.Batching(polyModulusDegree, bitSize)',
              '    );',
              '',
              '    const context = seal.Context(',
              '      parms, // Encryption Parameters',
              '      true, // ExpandModChain',
              '      securityLevel // Enforce a security level',
              '    );',
              '',
              '    if (!context.parametersSet()) {',
              '      throw new Error(',
              "        'Could not set the parameters in the given context. Please try different encryption parameters.'",
              '      );',
              '    }',
              '',
              '    const keyGenerator = seal.KeyGenerator(context);',
              '    const publicKey = keyGenerator.createPublicKey();',
              '    const secretKey = keyGenerator.secretKey()',
              '',
              '',
              '',
              '',
              '    secretKey.delete();',
              '    publicKey.delete();',
              '    keyGenerator.delete();',
              '    parms.delete();',
              '    context.delete();',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 47,
          };
        case EasyScheme.CKKS:
          return {
            code: [
              "<script lang='ts'>",
              '',
              "import SEAL from 'node-seal';",
              '',
              '(async () => {',
              '    // Wait for the web assembly to fully initialize',
              '    const seal = await SEAL();',
              '',
              '     ////////////////////////',
              '     // Encryption Parameters',
              '     ////////////////////////',
              '     // Create a new EncryptionParameters',
              `    const schemeType = seal.SchemeType.${this.scheme.scheme.value}`,
              `    const securityLevel = seal.SecurityLevel.${this.scheme.security.value}`,
              `    const polyModulusDegree = ${
                this.computedSealSpeed[this.scheme.speed.value].polyModulusDegree
              };`,
              `    const bitSizes = ${
                this.computedSealSpeed[this.scheme.speed.value].bitSizes
              };`,
              '',
              '    // Set the PolyModulusDegree',
              '    const parms = seal.EncryptionParameters(schemeType);',
              '',
              '    // Create a suitable set of CoeffModulus primes',
              '    parms.setCoeffModulus(',
              '         seal.CoeffModulus.Create(polyModulusDegree, Int32Array.from(bitSizes))',
              '    );',
              '',
              '    const context = seal.Context(',
              '      parms, // Encryption Parameters',
              '      true, // ExpandModChain',
              '      securityLevel // Enforce a security level',
              '    );',
              '',
              '    if (!context.parametersSet()) {',
              '      throw new Error(',
              "        'Could not set the parameters in the given context. Please try different encryption parameters.'",
              '      );',
              '    }',
              '',
              '    const keyGenerator = seal.KeyGenerator(context);',
              '    const publicKey = keyGenerator.createPublicKey();',
              '    const secretKey = keyGenerator.secretKey()',
              '',
              '',
              '    secretKey.delete();',
              '    publicKey.delete();',
              '    keyGenerator.delete();',
              '    parms.delete();',
              '    context.delete();',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 41,
          };
        default:
          return {
            code: [
              "<script lang='ts'>",
              '',
              "import SEAL from 'node-seal';",
              '',
              '(async () => {',
              '    // Wait for the web assembly to fully initialize',
              '    const seal = await SEAL();',
              '',
              '     ////////////////////////',
              '     // Encryption Parameters',
              '     ////////////////////////',

              '     // Create a new EncryptionParameters',
              `    const schemeType = seal.SchemeType.${this.scheme.scheme.value}`,
              `    const securityLevel = seal.SecurityLevel.${this.scheme.security.value}`,
              `    const polyModulusDegree = ${
                this.computedSealSpeed[this.scheme.speed.value].polyModulusDegree
              };`,
              `    const bitSizes = ${
                this.computedSealSpeed[this.scheme.speed.value].bitSizes
              };`,
              `    const bitSize = ${
                this.computedSealSpeed[this.scheme.speed.value].bitSize
              };`,
              '',
              '    // Set the PolyModulusDegree',
              '    const parms = seal.EncryptionParameters(schemeType);',
              '',
              '    // Create a suitable set of CoeffModulus primes',
              '    parms.setCoeffModulus(',
              '         seal.CoeffModulus.Create(polyModulusDegree, Int32Array.from(bitSizes))',
              '    );',
              '',
              '    // Set the PlainModulus to a prime of bitSize 20.',
              '    parms.setPlainModulus(',
              '      seal.PlainModulus.Batching(polyModulusDegree, bitSize)',
              '    );',
              '',
              '    const context = seal.Context(',
              '      parms, // Encryption Parameters',
              '      true, // ExpandModChain',
              '      securityLevel // Enforce a security level',
              '    );',
              '',
              '    if (!context.parametersSet()) {',
              '      throw new Error(',
              "        'Could not set the parameters in the given context. Please try different encryption parameters.'",
              '      );',
              '    }',
              '',
              '    const keyGenerator = seal.KeyGenerator(context);',
              '    const publicKey = keyGenerator.createPublicKey();',
              '    const secretKey = keyGenerator.secretKey()',
              '',
              '',
              '})()',
              '',
              '</style>',
            ],
            atIndexToInsert: 47,
          };
      }
    },
    nodeSealCodeMap(): GeneratedCodeMap {
      const precision = this.scheme.precision.value;
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
                  '    // plaintext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '	   // ciphertext + plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.add(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext - plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.sub(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext * plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext * ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiply(`,
                  `      enLeftValue${index},`,
                  `      enRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '	   // ciphertext + plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.add(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext - plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.sub(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext * plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext * ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.BatchEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiply(`,
                  `      enLeftValue${index},`,
                  `      enRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '    // plaintext * ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left}`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enRightValue${index},`,
                  `      eLeftValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enRightValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
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
                  '	   // ciphertext + plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.addPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext + ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.add(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['-']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext - plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.subPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext - ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.sub(enLeftValue${index}, enRightValue${index}) as CipherText;`,
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
            ['*']: {
              [ValueType.PLAIN]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '	   // ciphertext * plaintext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${left};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${right};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiplyPlain(`,
                  `      enLeftValue${index},`,
                  `      eRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
              [ValueType.CIPHER]: (operation: Operation, index: number): string[] => {
                const left = this.generatedLeftParameter(operation);
                const right = this.generatedRightParameter(operation);
                return [
                  '    // ciphertext * ciphertext',
                  '    //--------------------------------------',
                  '    // create an Encoder and encode the parameters',
                  `    const encoder${index} = seal.CKKSEncoder(context);`,
                  `    const leftValue${index} = ${right};`,
                  `    const eLeftValue${index} = encoder${index}.encode(leftValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  `    const rightValue${index} = ${left};`,
                  `    const eRightValue${index} = encoder${index}.encode(rightValue${index},${this.computedSealPrecision[precision]}) as PlainText;`,
                  '    //create an Encryptor to encrypt the parameter(s)',
                  `    const encryptor${index} = seal.Encryptor(context, publicKey);`,
                  `    const enLeftValue${index} = encryptor${index}.encrypt(eLeftValue${index}) as CipherText;`,
                  `    const enRightValue${index} = encryptor${index}.encrypt(eRightValue${index}) as CipherText;`,
                  '    //create an Evaluator',
                  `    const evaluator${index} = seal.Evaluator(context);`,
                  '    // perform the operation',
                  `    const enResult${index} = evaluator${index}.multiply(`,
                  `      enLeftValue${index},`,
                  `      enRightValue${index}`,
                  '    ) as CipherText;',
                  '    //create a Decryptor and decrypt the result',
                  `    const decryptor${index} = seal.Decryptor(context, secretKey);`,
                  `    const decoResult${index} = decryptor${index}.decrypt(enResult${index}) as PlainText;`,
                  `    const result${index} = encoder${index}.decode(decoResult${index});`,
                  '    //deallocate all the objects resulted',
                  `    eRightValue${index}.delete();`,
                  `    encoder${index}.delete();`,
                  `    decryptor${index}.delete();`,
                  `    evaluator${index}.delete();`,
                  `    eLeftValue${index}.delete();`,
                  `    enLeftValue${index}.delete();`,
                  `    encryptor${index}.delete();`,
                  '    //--------------------------------------',
                ];
              },
            },
          },
        },
      };
    },
  },
});
