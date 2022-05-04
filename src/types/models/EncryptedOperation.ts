export interface EncryptedOperation {
  leftHandSide: { value: string; isEncrypted: boolean };
  rightHandSide: { value: string; isEncrypted: boolean };
  operator: string;
  equal: string;
  result: string;
}
