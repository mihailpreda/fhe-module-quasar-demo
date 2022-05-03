export interface Operation {
  leftHandSide: { value: number; isEncrypted: boolean };
  rightHandSide: { value: number; isEncrypted: boolean };
  operator: string;
  equal: string;
  result: number;
}
