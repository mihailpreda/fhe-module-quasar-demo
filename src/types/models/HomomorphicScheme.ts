import { Scheme, Security, ProcessingSpeed, Precision } from 'easyFHE';
import { Operation } from './Operation';
interface DetailedScheme {
  label: string;
  value: Scheme;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedSpeed {
  label: string;
  value: ProcessingSpeed;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedSecurity {
  label: string;
  value: Security;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedPrecision {
  label: string;
  value: Precision;
  fullName: string;
  description: string;
  icon: string;
}
export interface HomomorphicScheme {
  scheme: DetailedScheme;
  security: DetailedSecurity;
  speed: DetailedSpeed;
  precision: DetailedPrecision;
  operations: Operation[];
}
