"use client";
import React, { useState } from "react";
import CriteriaButtons from "../components/Contacts/CriteriaButtons";
import InstructorBox from "@components/Contacts/ContactBox";
import InstructorInformationStore from "@store/InstructorInformationStore";
import { InstructorInfo as instructorInfoType } from "../store/types";
import HelperInformationStore from "@store/HelperInformationStore";
import { HelperInfo as HelperInfoType } from "../store/types";
import HelperBox from "../components/Contacts/HelperBox copy";

const Contacts = () => {
  const instructorInfo: instructorInfoType[] = InstructorInformationStore(
    (state) => state.instructorInfo
  );
  const HelperInfo: HelperInfoType[] = HelperInformationStore(
    (state) => state.helperInfo
  );

  const [instructorsVisible, setInstructorsVisible] = useState(true);
  const [helpersVisible, setHelpersVisible] = useState(false);

  const showInstructors = () => {
    setInstructorsVisible(true);
    setHelpersVisible(false);
  };

  const showHelpers = () => {
    setInstructorsVisible(false);
    setHelpersVisible(true);
  };

  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto items-center justify-center">
      {/* Criteria buttons */}
      <CriteriaButtons
        showInstructors={showInstructors}
        showHelpers={showHelpers}
        instructorsVisible={instructorsVisible}
        helpersVisible={helpersVisible}
      />
      {/* Instruktør header */}
      <div className="pt-10 border-t w-full flex items-center justify-center mt-4">
        <p className="text-3xl">Instruktører</p>
      </div>
      {/* Instructor collection */}
      <div className="flex w-full flex-col space-y-12">
        {instructorsVisible &&
          instructorInfo.map((instructor, index) => (
            <InstructorBox
              name={instructor.name}
              description={instructor.description}
              image={instructor.image}
            />
          ))}
        {helpersVisible &&
          HelperInfo.map((helper, index) => (
            <HelperBox
              name={helper.name}
              description={helper.description}
              image={helper.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Contacts;
