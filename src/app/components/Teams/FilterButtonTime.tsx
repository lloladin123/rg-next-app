import React from "react";
import TeamsDropdown from "@Teams/TeamsDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";

const FilterButtonTime: React.FC = () => {
  const menuItems = [
    { name: "Mandag", checked: false },
    { name: "Tirsdag", checked: false },
    { name: "Onsdag", checked: false },
    { name: "Torsdag", checked: false },
    { name: "Fredag", checked: false },
    { name: "Lørdag", checked: false },
    { name: "Søndag", checked: false },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-2xl px-2 space-x-1 hover:bg-gray-400 duration-300 ease-in-out">
      <FaMapMarkerAlt />
      <TeamsDropdown
        menuItems={menuItems}
        title="Tidspunkt"
        showTimeFilter={true}
      />
    </div>
  );
};

export default FilterButtonTime;
