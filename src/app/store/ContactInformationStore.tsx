import create from "zustand";
import { ContactInfo, ContactStore } from "./types";

const useContactInformationStore = create<ContactStore>((set) => ({
  contactInfo: {
    name: "Roskilde Gymnastikforening",
    address: "Kildegården 1, 4000 Roskilde",
    phone: "52241924",
    email: "kontakt@roskildegf.dk",
    cvr: "22583514",
  },
  setContactInfo: (newInfo: ContactInfo) => set({ contactInfo: newInfo }),
}));

export default useContactInformationStore;
