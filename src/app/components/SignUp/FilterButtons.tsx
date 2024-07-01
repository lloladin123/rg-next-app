"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterButtonTeamGroups from "./FilterButtonTeamGroups";
import FilterButtonStatus from "./FilterButtonStatus";
import FilterButtonLocation from "./FilterButtonLocation";
import FilterButtonTime from "./FilterButtonTime";

const FilterButtons: React.FC = () => {
  return (
    <div className="w-50 flex flex-row items-center justify-center space-x-2 space-y-1 p-4 flex-wrap whitespace-nowrap">
      <button className="bg-gray-500 p-2 mt-1 rounded-2xl">
        <div>Vis alle</div>
      </button>
      <FilterButtonTeamGroups />
      <FilterButtonStatus />
      <FilterButtonTime />
      <FilterButtonLocation />
    </div>
  );
};

export default FilterButtons;
