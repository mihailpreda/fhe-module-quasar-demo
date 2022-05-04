import { Operation } from './Operation';

export interface EncryptedOperation extends Operation {
  isComputed: boolean;
}
