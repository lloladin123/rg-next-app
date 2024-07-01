import React from "react";
import SignUpDropdown from "@SignUp/SignUpDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";

const FilterButtonTime: React.FC = () => {
  const menuItems = [
    { name: "Mandag" },
    { name: "Tirsdag" },
    { name: "Onsdag" },
    { name: "Torsdag" },
    { name: "Fredag" },
    { name: "Lørdag" },
    { name: "Søndag" },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-lg px-2 space-x-1">
      <FaMapMarkerAlt />
      <SignUpDropdown
        menuItems={menuItems}
        title="Tidspunkt"
        showTimeFilter={true}
      />
    </div>
  );
};

export default FilterButtonTime;
