"use client";
import React from "react";
import CriteriaButtons from "../components/Contacts/CriteriaButtons";
import InstructorBox from "../components/Contacts/InstructorBox";
import InstructorInformationStore from "@store/InstructorInformationStore";
import { InstructorInfo as instructorInfoType } from "../store/types";

const Contacts = () => {
  const instructorInfo: instructorInfoType[] = InstructorInformationStore(
    (state) => state.instructorInfo
  );
  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto items-center justify-center">
      {/* Criteria buttons */}
      <CriteriaButtons />
      {/* Instruktør header */}
      <div className="pt-10 border-t w-full flex items-center justify-center mt-4">
        <p className="text-3xl">Instruktør</p>
      </div>
      {/* Instructor collection */}
      <div className="flex w-full flex-col space-y-12">
        {instructorInfo.map((instructor, index) => (
          <InstructorBox
            name={instructor.name}
            description={instructor.description}
            image={instructor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
