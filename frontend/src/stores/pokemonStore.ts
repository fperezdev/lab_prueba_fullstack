import { create } from 'zustand';

interface PokemonStore {
  chosenSetId: string | null;
  setChosenSetId: (chosenSetId: string) => void;
  chosenCardId: string | null;
  setChosenCardId: (chosenCardId: string) => void;
  clearChosenCardId: () => void;
  filterText: string;
  setFilterText: (filterText: string) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  chosenSetId: null,
  setChosenSetId: (chosenSetId) => set({ chosenSetId }),
  chosenCardId: null,
  setChosenCardId: (chosenCardId) => set({ chosenCardId }),
  clearChosenCardId: () => set({ chosenCardId: null }),
  filterText: '',
  setFilterText: (filterText) => set({ filterText }),
}));
