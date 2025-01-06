import { create } from 'zustand';

interface PokemonStore {
  chosenSetId: string | null;
  setChosenSetId: (chosenSetId: string) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  chosenSetId: null,
  setChosenSetId: (chosenSetId) => set({ chosenSetId }),
}));
