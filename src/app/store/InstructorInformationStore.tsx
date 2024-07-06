import create from "zustand";
import { InstructorStore } from "./types";

const useInstructorStore = create<InstructorStore>((set) => ({
  instructorInfo: [
    {
      name: "Alexander Thøgersen",
      description:
        "Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der",
      image: "/images/Alexander.jpg",
    },
    {
      name: "Kim Lauer",
      description: "",
      image: "/images/Kim.jpg",
    },
  ],
  setInstructorInfo: (newInfo) => set({ instructorInfo: newInfo }),
}));

export default useInstructorStore;
