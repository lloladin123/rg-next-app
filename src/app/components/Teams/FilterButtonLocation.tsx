import React from "react";
import TeamsDropdown from "@Teams/TeamsDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";

const FilterButtonLocation: React.FC = () => {
  const menuItems = [
    { name: "Hedegårdenes Skole (Hallen)", checked: false },
    { name: "Hedegårdenes Skole (Musiklokalet)", checked: false },
    { name: "Hedegårdenes Skole (Pigesalen)", checked: false },
    { name: "Idrættens hus (Rytmesal 2)", checked: false },
    { name: "Kildegårdshallen (Hallen)", checked: false },
    { name: "Klostermarksskolen (Festsalen)", checked: false },
    { name: "Roskilde Kongres- og Idrætscenter - Hal B", checked: false },
    { name: "Sct. Jørgens Skole - Festsalen (Festsalen)", checked: false },
    { name: "Østervangsskolen (Hallen)", checked: false },
    { name: "Idrættens hus (Rytmesal 1)", checked: false },
    { name: "Idrættens hus (Springhal)", checked: false },
    { name: "Idrættens hus (Trampolinhal)", checked: false },
    { name: "Idrættens Hus (Bevægelsessal - Stuen)", checked: false },
    { name: "Hedegårdenes Skole (Skolegården)", checked: false },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-2xl px-2 space-x-1 hover:bg-gray-400 duration-300 ease-in-out">
      <FaMapMarkerAlt />
      <TeamsDropdown menuItems={menuItems} title="Lokation" />
    </div>
  );
};

export default FilterButtonLocation;
