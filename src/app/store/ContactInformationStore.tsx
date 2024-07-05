import create from "zustand";
import { ContactInfo, ContactStore } from "./types";

const useContactStore = create<ContactStore>((set) => ({
  contactInfo: {
    name: "Roskilde Gymnastikforening",
    address: "Kildegården 1, 4000 Roskilde",
    phone: "52 24 19 24",
    email: "kontakt@roskildegf.dk",
    cvr: "22583514",
  },
  setContactInfo: (newInfo: ContactInfo) => set({ contactInfo: newInfo }),
}));

export default useContactStore;
