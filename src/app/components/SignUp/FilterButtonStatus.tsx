import React from "react";
import SignUpDropdown from "@SignUp/SignUpDropdown";
import { FaUsers } from "react-icons/fa";
const FilterButtonStatus: React.FC = () => {
  const menuItems = [
    { name: "Ledig" },
    { name: "Venteliste" },
    { name: "Optaget" },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-lg px-2 space-x-1">
      <FaUsers />
      <SignUpDropdown menuItems={menuItems} title="PladsStatus" />
    </div>
  );
};

export default FilterButtonStatus;
