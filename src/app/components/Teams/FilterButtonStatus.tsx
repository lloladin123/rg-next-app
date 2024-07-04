import React from "react";
import TeamsDropdown from "@Teams/TeamsDropdown";
import { FaUsers } from "react-icons/fa";
const FilterButtonStatus: React.FC = () => {
  const menuItems = [
    { name: "Ledig", checked: false },
    { name: "Venteliste", checked: false },
    { name: "Optaget", checked: false },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-2xl px-2 space-x-1 hover:bg-gray-400">
      <FaUsers />
      <TeamsDropdown menuItems={menuItems} title="PladsStatus" />
    </div>
  );
};

export default FilterButtonStatus;
