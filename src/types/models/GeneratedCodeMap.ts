import { Operation } from './Operation';
import { ValueType } from './ValueType';

export interface GeneratedCodeMap {
  [x: string]: {
    [key in ValueType]: {
      [x: string]: {
        [key in ValueType]: (operation: Operation, index: number) => string[];
      };
    };
  };
}
