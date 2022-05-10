import { EasyPrecision, EasySecurity, EasySpeed } from 'easyFHE';

export interface SetupMemoryMap {
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
