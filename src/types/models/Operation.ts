import { ValueType } from './ValueType';

export interface Operation {
  leftSide: { value: string; type: ValueType };
  rightSide: { value: string; type: ValueType };
  operator: string;
  result: string;
  isComputed: boolean;
}
