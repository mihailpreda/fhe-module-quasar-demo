import { ValueType } from './ValueType';

export interface ComputationMap {
  [x: string]: {
    [key in ValueType]: {
      [x: string]: {
        [key in ValueType]: () => void;
      };
    };
  };
}
