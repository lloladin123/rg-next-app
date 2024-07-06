import React from "react";
import { FaCheck } from "react-icons/fa";

interface CriteriaButtonsProps {
  showInstructors?: () => void;
  showHelpers?: () => void;
  instructorsVisible: boolean;
  helpersVisible: boolean;
}

const CriteriaButtons: React.FC<CriteriaButtonsProps> = ({
  showInstructors,
  showHelpers,
  instructorsVisible,
  helpersVisible,
}) => {
  return (
    <div className="flex flex-row space-x-2 space-y-1 flex-wrap items-center justify-center">
      <button
        className="p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out"
        onClick={showInstructors}
      >
        {instructorsVisible && <FaCheck className="mt-1 mr-1" />}
        Instruktør
      </button>
      <button
        className="p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out"
        onClick={showHelpers}
      >
        {helpersVisible && <FaCheck className="mt-1 mr-1" />}
        HjælpeInstruktør
      </button>
      <button className="p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        <FaCheck className="mt-1 mr-1" />
        Bestyrelse
      </button>
      <button className="p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        <FaCheck className="mt-1 mr-1" />
        Suppleanter
      </button>
      <button className="p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        <FaCheck className="mt-1 mr-1" />
        Kontaktpersoner
      </button>
    </div>
  );
};

export default CriteriaButtons;
