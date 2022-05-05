import { defineStore } from 'pinia';

import { HomomorphicScheme } from 'src/types/models';

const storeID = 'playground';

interface PlaygroundStoreState {
  homomorphicSchemes: HomomorphicScheme[];
  openDialog: boolean;
  schemeID: number;
  openCodeComparison: boolean;
}

const PlaygroundStoreState: PlaygroundStoreState = {
  schemeID: 0,
  homomorphicSchemes: [],
  openDialog: false,
  openCodeComparison: false,
};

export { PlaygroundStoreState };

export const usePlaygroundStore = defineStore({
  id: storeID,
  state: (): PlaygroundStoreState =>
    JSON.parse(JSON.stringify(PlaygroundStoreState)) as PlaygroundStoreState,
});

export type PlaygroundStore = ReturnType<typeof usePlaygroundStore>;
