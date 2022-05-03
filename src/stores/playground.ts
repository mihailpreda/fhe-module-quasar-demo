import { defineStore } from 'pinia';

import { HomomorphicScheme } from 'src/types/models';

const storeID = 'playground';

interface PlaygroundStoreState {
  homomorphicSchemes: HomomorphicScheme[];
  openDialog: boolean;
}

const PlaygroundStoreState: PlaygroundStoreState = {
  homomorphicSchemes: [],
  openDialog: false,
};

export { PlaygroundStoreState };

export const usePlaygroundStore = defineStore({
  id: storeID,
  state: (): PlaygroundStoreState =>
    JSON.parse(JSON.stringify(PlaygroundStoreState)) as PlaygroundStoreState,
});

export type PlaygroundStore = ReturnType<typeof usePlaygroundStore>;
