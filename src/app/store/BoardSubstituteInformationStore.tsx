import create from "zustand";
import { BoardSubstituteStore } from "./types";

const useBoardSubstituteStore = create<BoardSubstituteStore>((set) => ({
  boardSubstituteInfo: [
    {
      name: "Line Olesen",
      description: "",
      image: "",
    },
  ],
  setBoardSubstituteInfo: (newInfo) => set({ boardSubstituteInfo: newInfo }),
}));

export default useBoardSubstituteStore;
