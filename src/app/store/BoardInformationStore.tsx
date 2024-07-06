import create from "zustand";
import { BoardStore } from "./types";

const useBoardStore = create<BoardStore>((set) => ({
  boardInfo: [
    {
      name: "Lisbeth Walmod",
      description: "",
      image: "",
    },
  ],
  setBoardInfo: (newInfo) => set({ boardInfo: newInfo }),
}));

export default useBoardStore;
