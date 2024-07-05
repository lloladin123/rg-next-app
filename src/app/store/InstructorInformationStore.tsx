import create from "zustand";
import { InstructorStore } from "./types";
import Alexander from "@images/Alexander.jpg";

const useInstructorStore = create<InstructorStore>((set) => ({
  instructorInfo: [
    {
      name: "Alexander Thøgersen",
      description:
        "Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der",
      image: "/images/Alexander.jpg",
    },
    {
      name: "Alexander Thøgersen",
      description:
        "Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der",
      image: "/images/Alexander.jpg",
    },
    {
      name: "Alexander Thøgersen",
      description:
        "Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der",
      image: "/images/Alexander.jpg",
    },
  ],
  setInstructorInfo: (newInfo) => set({ instructorInfo: newInfo }),
}));

export default useInstructorStore;
