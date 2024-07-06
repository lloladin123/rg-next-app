import create from "zustand";
import { ContactPersonalStore } from "./types";

const useContactPersonalStore = create<ContactPersonalStore>((set) => ({
  contactPersonalInfo: [
    {
      name: "Birgitte Bjerring",
      description: "",
      image: "",
    },
  ],
  setContactPersonalInfo: (newInfo) => set({ contactPersonalInfo: newInfo }),
}));

export default useContactPersonalStore;
