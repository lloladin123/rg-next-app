import React from "react";
import Alexander from "@images/Alexander.jpg";
import CriteriaButtons from "../components/Contacts/CriteriaButtons";
import InstructorBox from "../components/Contacts/InstructorBox";

const Contacts = () => {
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
        <InstructorBox
          name="Alexander Thøgersen"
          description="Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der"
          image={Alexander}
        />
        <InstructorBox
          name="Alexander Thøgersen"
          description="Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen 2018/19, på et par hold der"
        />
      </div>
    </div>
  );
};

export default Contacts;
