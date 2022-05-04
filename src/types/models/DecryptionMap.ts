import { ValueType } from './ValueType';

export interface DecryptionMap {
  [x: string]: {
    [key in ValueType]: {
      [x: string]: {
        [key in ValueType]: () => void;
      };
    };
  };
}
