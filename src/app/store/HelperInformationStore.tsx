import create from "zustand";
import { HelperStore } from "./types";

const useHelperStore = create<HelperStore>((set) => ({
  helperInfo: [
    {
      name: "Alma Sandø Højland",
      description: "",
      image: "",
    },
  ],
  setHelperInfo: (newInfo) => set({ helperInfo: newInfo }),
}));

export default useHelperStore;
