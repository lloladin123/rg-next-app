import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const FilterTimeInput = () => {
  return (
    <div className="flex items-center space-x-2">
      <input className="w-1/2 border p-2" type="text" defaultValue="12:00 AM" />
      <MdArrowForwardIos className="text-gray-500" />
      <input className="w-1/2 border p-2" type="text" defaultValue="12:00 AM" />
    </div>
  );
};

export default FilterTimeInput;
