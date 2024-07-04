// FilterButtonTeamGroups.tsx
import React from "react";
import TeamsDropdown from "@Teams/TeamsDropdown";
import { FaListUl } from "react-icons/fa";

const FilterButtonTeamGroups: React.FC = () => {
  // Example menu items for team group dropdown
  const menuItems = [
    { name: "Motionshold (11)", checked: false },
    { name: "Børnehold (5)", checked: false },
    { name: "Springhold (10)", checked: false },
    { name: "Rytmehold (3)", checked: false },
    { name: "Sports Acro (3)", checked: false },
    { name: "Unicykling (2)", checked: false },
    { name: "Trampolin (1)", checked: false },
    { name: "Akroyoga (1)", checked: false },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-2xl px-2 space-x-1 hover:bg-gray-400 duration-300 ease-in-out">
      <FaListUl />
      <TeamsDropdown menuItems={menuItems} title="Holdgrupper" />
    </div>
  );
};

export default FilterButtonTeamGroups;
