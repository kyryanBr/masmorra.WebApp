import { create } from "zustand";

interface GameState {
  campanhaSelecionada: number | null;
  setCampanhaSelecionada: (id: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  campanhaSelecionada: null,
  setCampanhaSelecionada: (id) => set({ campanhaSelecionada: id }),
}));