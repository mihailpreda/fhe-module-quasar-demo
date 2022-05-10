import { EasyPrecision, EasySecurity, EasySpeed } from 'easyFHE';

export interface SetupSpeedMap {
  //easy/node
  [x: string]: {
    //scheme
    [x: string]: {
      //security
      [key in EasySecurity]: {
        //speed
        [key in EasySpeed]: {
          //precision
          [key in EasyPrecision]: number;
        };
      };
    };
  };
}
