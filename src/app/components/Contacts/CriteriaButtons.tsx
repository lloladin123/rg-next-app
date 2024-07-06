import React from "react";
import { FaCheck } from "react-icons/fa";

interface CriteriaButtonsProps {
  toggleButtons: { key: string; label: string }[];
  handleToggle: (toggleKey: string) => void;
  activeToggle: string | undefined;
}

const CriteriaButtons: React.FC<CriteriaButtonsProps> = ({
  toggleButtons,
  handleToggle,
  activeToggle,
}) => {
  return (
    <div className="flex flex-row space-x-2 pt-1 flex-wrap items-center justify-center">
      {toggleButtons.map((toggle, index) => (
        <button
          key={index}
          className={`p-1 flex flex-row px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out ${
            activeToggle === toggle.key ? "text-white" : ""
          }`}
          onClick={() => handleToggle(toggle.key)}
        >
          {activeToggle === toggle.key && <FaCheck className="mt-1 mr-1" />}
          {toggle.label}
        </button>
      ))}
    </div>
  );
};

export default CriteriaButtons;
