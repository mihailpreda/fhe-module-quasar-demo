import { EasyScheme, EasySecurity, EasySpeed, EasyPrecision } from 'easyFHE';
import { Operation } from './Operation';
interface DetailedScheme {
  label: string;
  value: EasyScheme;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedSpeed {
  label: string;
  value: EasySpeed;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedSecurity {
  label: string;
  value: EasySecurity;
  fullName: string;
  description: string;
  icon: string;
}
interface DetailedPrecision {
  label: string;
  value: EasyPrecision;
  fullName: string;
  description: string;
  icon: string;
}
export interface HomomorphicScheme {
  schemeID: number;
  scheme: DetailedScheme;
  security: DetailedSecurity;
  speed: DetailedSpeed;
  precision: DetailedPrecision;
  operations: Operation[];
}
