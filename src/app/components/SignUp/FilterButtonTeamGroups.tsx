// FilterButtonTeamGroups.tsx
import React from "react";
import SignUpDropdown from "@SignUp/SignUpDropdown";
import { FaListUl } from "react-icons/fa";

const FilterButtonTeamGroups: React.FC = () => {
  // Example menu items for team group dropdown
  const menuItems = [
    { name: "Motionshold (11)" },
    { name: "Børnehold (5)" },
    { name: "Springhold (10)" },
    { name: "Rytmehold (3)" },
    { name: "Sports Acro (3)" },
    { name: "Unicykling (2)" },
    { name: "Trampolin (1)" },
    { name: "Akroyoga (1)" },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-lg px-2 space-x-1">
      <FaListUl />
      <SignUpDropdown menuItems={menuItems} title="Holdgrupper" />
    </div>
  );
};

export default FilterButtonTeamGroups;
