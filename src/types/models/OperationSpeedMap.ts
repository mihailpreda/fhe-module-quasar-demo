import { EasyPrecision, EasySecurity, EasySpeed } from 'easyFHE';
import { ValueType } from './ValueType';

export interface OperationSpeedMap {
  //easy/node
  [x: string]: {
    //scheme
    [x: string]: {
      //security
      [key in EasySecurity]: {
        //speed
        [key in EasySpeed]: {
          //precision
          [key in EasyPrecision]: {
            [key in ValueType]: {
              [x: string]: {
                [key in ValueType]: number;
              };
            };
          };
        };
      };
    };
  };
}
