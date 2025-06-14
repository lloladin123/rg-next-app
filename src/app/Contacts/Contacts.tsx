"use client";

import React, { useState } from "react";
import CriteriaButtons from "../components/Contacts/CriteriaButtons";
import InstructorInformationStore from "@store/InstructorInformationStore";
import { InstructorInfo as InstructorInfoType } from "../store/types";
import HelperInformationStore from "@store/HelperInformationStore";
import { HelperInfo as HelperInfoType } from "../store/types";
import BoardInformationStore from "@store/BoardInformationStore";
import { BoardInfo as BoardInfoType } from "../store/types";
import BoardSubstituteInformationStore from "@store/BoardSubstituteInformationStore";
import { BoardSubstituteInfo as BoardSubstituteInfoType } from "../store/types";
import ContactPersonalInformationStore from "@store/ContactPersonalInformationStore";
import { ContactPersonalInfo as ContactPersonalInfoType } from "../store/types";
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
  const contactPersonalInfo: ContactPersonalInfoType[] =
    ContactPersonalInformationStore((state) => state.contactPersonalInfo);

  const [toggleState, setToggleState] = useState({
    instructorsVisible: true,
    helpersVisible: false,
    boardVisible: false,
    boardSubstituteVisible: false,
    contactPersonalVisible: false,
  });

  const handleToggle = (toggleKey: string) => {
    setToggleState({
      ...toggleState,
      instructorsVisible: toggleKey === "instructorsVisible",
      helpersVisible: toggleKey === "helpersVisible",
      boardVisible: toggleKey === "boardVisible",
      boardSubstituteVisible: toggleKey === "boardSubstituteVisible",
      contactPersonalVisible: toggleKey === "contactPersonalVisible",
    });
  };

  const toggleButtons = [
    { key: "instructorsVisible", label: "Instruktører" },
    { key: "helpersVisible", label: "HjælpeInstruktør" },
    { key: "boardVisible", label: "Bestyrelse" },
    { key: "boardSubstituteVisible", label: "Suppleanter" },
    { key: "contactPersonalVisible", label: "Kontakter" },
  ];

  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto items-center justify-center">
      <CriteriaButtons
        toggleButtons={toggleButtons}
        handleToggle={handleToggle}
        activeToggle={Object.keys(toggleState).find(
          (key) => toggleState[key as keyof typeof toggleState]
        )}
      />
      <div className="pt-10 border-t w-full flex items-center justify-center mt-4">
        <p className="text-3xl">{title}</p>
      </div>
      <div className="flex w-full flex-col space-y-12">
        {toggleState.instructorsVisible && (
          <ContactBox contacts={instructorInfo} />
        )}
        {toggleState.helpersVisible && <ContactBox contacts={helperInfo} />}
        {toggleState.boardVisible && <ContactBox contacts={boardInfo} />}
        {toggleState.boardSubstituteVisible && (
          <ContactBox contacts={boardSubstituteInfo} />
        )}
        {toggleState.contactPersonalVisible && (
          <ContactBox contacts={contactPersonalInfo} />
        )}
      </div>
    </div>
  );
};

export default Contacts;
