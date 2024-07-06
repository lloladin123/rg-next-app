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
import BoardSubstituteInformationStore from "@store/BoardSubstituteInformationStore";
import { BoardInfo as BoardSubstituteInfoType } from "../store/types";
import ContactBox from "@components/Contacts/ContactBox";

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
  const boardSubstituteInfo: BoardSubstituteInfoType[] =
    BoardSubstituteInformationStore((state) => state.boardSubstituteInfo);

  const [toggleState, setToggleState] = useState({
    instructorsVisible: true,
    helpersVisible: false,
    boardVisible: false,
    boardSubstituteVisible: false,
  });

  const handleToggle = (toggleKey: string) => {
    setToggleState({
      ...toggleState,
      instructorsVisible: toggleKey === "instructorsVisible",
      helpersVisible: toggleKey === "helpersVisible",
      boardVisible: toggleKey === "boardVisible",
      boardSubstituteVisible: toggleKey === "boardSubstituteVisible",
    });
  };

  const toggleButtons = [
    { key: "instructorsVisible", label: "Instruktører" },
    { key: "helpersVisible", label: "HjælpeInstruktør" },
    { key: "boardVisible", label: "Bestyrelse" },
    { key: "boardSubstituteVisible", label: "Suppleanter" },
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
      {/* Contacts collection */}
      <div className="flex w-full flex-col space-y-12">
        {toggleState.instructorsVisible && (
          <ContactBox contacts={instructorInfo} />
        )}
        {toggleState.helpersVisible && <ContactBox contacts={helperInfo} />}
        {toggleState.boardVisible && <ContactBox contacts={boardInfo} />}
        {toggleState.boardSubstituteVisible && (
          <ContactBox contacts={boardSubstituteInfo} />
        )}
      </div>
    </div>
  );
};

export default Contacts;
