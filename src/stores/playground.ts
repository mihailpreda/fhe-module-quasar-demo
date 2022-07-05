import { EasyScheme, EasySecurity, EasySpeed, EasyPrecision } from 'easyFHE';
import { defineStore } from 'pinia';

import {
  HomomorphicScheme,
  OperationMemoryMap,
  OperationSpeedMap,
  SetupMemoryMap,
  SetupSpeedMap,
  ValueType,
} from 'src/types/models';

const storeID = 'playground';

interface PlaygroundStoreState {
  homomorphicSchemes: HomomorphicScheme[];
  openDialog: boolean;
  schemeID: number;
  openCodeComparisonDialog: boolean;
  openGraphsDialog: boolean;
  percentage: number;
  operationSpeedMap: OperationSpeedMap;
  setupSpeedMap: SetupSpeedMap;
  operationMemoryMap: OperationMemoryMap;
  setupMemoryMap: SetupMemoryMap;
  leftDrawerOpen: boolean;
}

const PlaygroundStoreState: PlaygroundStoreState = {
  leftDrawerOpen: false,
  schemeID: 0,
  homomorphicSchemes: [],
  openDialog: false,
  openCodeComparisonDialog: false,
  openGraphsDialog: false,
  percentage: 7,
  operationSpeedMap: {
    easyFhe: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
    },
    nodeSeal: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['-']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
                ['*']: {
                  [ValueType.PLAIN]: 0,
                  [ValueType.CIPHER]: 0,
                },
              },
            },
          },
        },
      },
    },
  },
  setupSpeedMap: {
    easyFhe: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
    },
    nodeSeal: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 0,
            [EasyPrecision.NORMAL]: 0,
            [EasyPrecision.HIGH]: 0,
          },
        },
      },
    },
  },
  operationMemoryMap: {
    easyFhe: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7538,
                  [ValueType.CIPHER]: 7538,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7688,
                  [ValueType.CIPHER]: 7688,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7764,
                  [ValueType.CIPHER]: 7764,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4103,
                  [ValueType.CIPHER]: 4103,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4185,
                  [ValueType.CIPHER]: 4185,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4226,
                  [ValueType.CIPHER]: 4226,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8199,
                  [ValueType.CIPHER]: 8199,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8362,
                  [ValueType.CIPHER]: 8362,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8444,
                  [ValueType.CIPHER]: 8444,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16391,
                  [ValueType.CIPHER]: 16391,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16718,
                  [ValueType.CIPHER]: 16718,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16882,
                  [ValueType.CIPHER]: 16882,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['-']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
                ['*']: {
                  [ValueType.PLAIN]: 32775,
                  [ValueType.CIPHER]: 32775,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33430,
                  [ValueType.CIPHER]: 33430,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33758,
                  [ValueType.CIPHER]: 33758,
                },
              },
            },
          },
        },
      },
    },
    nodeSeal: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7726,
                  [ValueType.CIPHER]: 7726,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7880,
                  [ValueType.CIPHER]: 7880,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['-']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
                ['*']: {
                  [ValueType.PLAIN]: 7958,
                  [ValueType.CIPHER]: 7958,
                },
              },
            },
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4206,
                  [ValueType.CIPHER]: 4206,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4290,
                  [ValueType.CIPHER]: 4290,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['-']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
                ['*']: {
                  [ValueType.PLAIN]: 4332,
                  [ValueType.CIPHER]: 4332,
                },
              },
            },
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8404,
                  [ValueType.CIPHER]: 8404,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8571,
                  [ValueType.CIPHER]: 8571,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['-']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
                ['*']: {
                  [ValueType.PLAIN]: 8655,
                  [ValueType.CIPHER]: 8655,
                },
              },
            },
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['-']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
                ['*']: {
                  [ValueType.PLAIN]: 16801,
                  [ValueType.CIPHER]: 16801,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17136,
                  [ValueType.CIPHER]: 17136,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['-']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
                ['*']: {
                  [ValueType.PLAIN]: 17304,
                  [ValueType.CIPHER]: 17304,
                },
              },
            },
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['-']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
                ['*']: {
                  [ValueType.PLAIN]: 33594,
                  [ValueType.CIPHER]: 33594,
                },
              },
            },
            [EasyPrecision.NORMAL]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34266,
                  [ValueType.CIPHER]: 34266,
                },
              },
            },
            [EasyPrecision.HIGH]: {
              [ValueType.PLAIN]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
              [ValueType.CIPHER]: {
                ['+']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['-']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
                ['*']: {
                  [ValueType.PLAIN]: 34602,
                  [ValueType.CIPHER]: 34602,
                },
              },
            },
          },
        },
      },
    },
  },
  setupMemoryMap: {
    easyFhe: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 107,
            [EasyPrecision.NORMAL]: 107,
            [EasyPrecision.HIGH]: 107,
          },
        },
      },
    },
    nodeSeal: {
      [`${EasyScheme.BFV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
      },
      [`${EasyScheme.BGV}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
      },
      [`${EasyScheme.CKKS}`]: {
        [EasySecurity.TC128]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC192]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
        [EasySecurity.TC256]: {
          [EasySpeed.VERY_FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.FAST]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.NORMAL]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
          [EasySpeed.VERY_SLOW]: {
            [EasyPrecision.LOW]: 299,
            [EasyPrecision.NORMAL]: 299,
            [EasyPrecision.HIGH]: 299,
          },
        },
      },
    },
  },
};

export { PlaygroundStoreState };

export const usePlaygroundStore = defineStore({
  id: storeID,
  state: (): PlaygroundStoreState =>
    JSON.parse(JSON.stringify(PlaygroundStoreState)) as PlaygroundStoreState,
});

export type PlaygroundStore = ReturnType<typeof usePlaygroundStore>;
