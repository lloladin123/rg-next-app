import React from "react";
import SignUpDropdown from "@SignUp/SignUpDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";

const FilterButtonLocation: React.FC = () => {
  const menuItems = [
    { name: "Hedegårdenes Skole (Hallen)" },
    { name: "Hedegårdenes Skole (Musiklokalet)" },
    { name: "Hedegårdenes Skole (Pigesalen)" },
    { name: "Idrættens hus (Rytmesal 2)" },
    { name: "Kildegårdshallen (Hallen)" },
    { name: "Klostermarksskolen (Festsalen)" },
    { name: "Roskilde Kongres- og Idrætscenter - Hal B" },
    { name: "Sct. Jørgens Skole - Festsalen (Festsalen)" },
    { name: "Østervangsskolen (Hallen)" },
    { name: "Idrættens hus (Rytmesal 1)" },
    { name: "Idrættens hus (Springhal)" },
    { name: "Idrættens hus (Trampolinhal)" },
    { name: "Idrættens Hus (Bevægelsessal - Stuen)" },
    { name: "Hedegårdenes Skole (Skolegården)" },
  ];

  return (
    <div className="w-50 flex flex-row items-center justify-center bg-gray-500 rounded-lg px-2 space-x-1">
      <FaMapMarkerAlt />
      <SignUpDropdown menuItems={menuItems} title="Lokation" />
    </div>
  );
};

export default FilterButtonLocation;
