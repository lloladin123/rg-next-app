"use client";
import React, { useState } from "react";
import CriteriaButtons from "../components/Contacts/CriteriaButtons";
import InstructorBox from "@components/Contacts/ContactBox";
import InstructorInformationStore from "@store/InstructorInformationStore";
import { InstructorInfo as InstructorInfoType } from "../store/types";
import HelperInformationStore from "@store/HelperInformationStore";
import { HelperInfo as HelperInfoType } from "../store/types";
import BoardInformationStore from "@store/BoardInformationStore";
import { BoardInfo as BoardInfoType } from "../store/types";
import HelperBox from "../components/Contacts/HelperBox copy";
import BoardBox from "../components/Contacts/BoardBox";

interface ContactsProps {
  title: string;
}

const Contacts: React.FC<ContactsProps> = ({ title }) => {
  const instructorInfo: InstructorInfoType[] = InstructorInformationStore(
    (state) => state.instructorInfo
  );
  const helperInfo: HelperInfoType[] = HelperInformationStore(
    (state) => state.helperInfo
  );
  const boardInfo: BoardInfoType[] = BoardInformationStore(
    (state) => state.boardInfo
  );

  const [toggleState, setToggleState] = useState({
    instructorsVisible: true,
    helpersVisible: false,
    boardVisible: false,
  });

  const handleToggle = (toggleKey: string) => {
    setToggleState({
      ...toggleState,
      instructorsVisible: toggleKey === "instructorsVisible",
      helpersVisible: toggleKey === "helpersVisible",
      boardVisible: toggleKey === "boardVisible",
    });
  };

  const toggleButtons = [
    { key: "instructorsVisible", label: "Instruktører" },
    { key: "helpersVisible", label: "HjælpeInstruktør" },
    { key: "boardVisible", label: "Bestyrelse" },
  ];

  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto items-center justify-center">
      {/* Criteria buttons */}
      <CriteriaButtons
        toggleButtons={toggleButtons}
        handleToggle={handleToggle}
        activeToggle={Object.keys(toggleState).find(
          (key) => toggleState[key as keyof typeof toggleState]
        )}
      />
      {/* Instruktør header */}
      <div className="pt-10 border-t w-full flex items-center justify-center mt-4">
        <p className="text-3xl">{title}</p>
      </div>
      {/* Instructor collection */}
      <div className="flex w-full flex-col space-y-12">
        {toggleState.instructorsVisible &&
          instructorInfo.map((instructor, index) => (
            <InstructorBox
              key={index}
              name={instructor.name}
              description={instructor.description}
              image={instructor.image}
            />
          ))}
        {toggleState.helpersVisible &&
          helperInfo.map((helper, index) => (
            <HelperBox
              key={index}
              name={helper.name}
              description={helper.description}
              image={helper.image}
            />
          ))}
        {toggleState.boardVisible &&
          boardInfo.map((board, index) => (
            <BoardBox
              key={index}
              name={board.name}
              description={board.description}
              image={board.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Contacts;
