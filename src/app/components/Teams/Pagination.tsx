import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center space-x-2 p-4 mt-2">
      {/* First page button */}
      <button className="bg-gray-500 p-1.5 rounded-full hover:bg-gray-400 duration-300 ease-in-out">
        <div className="text-sm flex flex-row items-center">
          <MdKeyboardDoubleArrowLeft />
          Første
        </div>
      </button>
      {/* Go back page Button */}
      <button className="bg-gray-500 p-1.5 rounded-full hover:bg-gray-400 duration-300 ease-in-out">
        <div className="text-sm flex flex-row items-center">
          <IoIosArrowBack />
          Tilbage
        </div>
      </button>
      {/* Current page */}
      <p>Side 1</p>
      {/* Next page button */}
      <button className="bg-gray-500 p-1.5 rounded-full hover:bg-gray-400 duration-300 ease-in-out">
        <div className="text-sm flex flex-row items-center">
          Næste
          <IoIosArrowForward />
        </div>
      </button>
      {/* Last page button */}
      <button className="bg-gray-500 p-1.5 rounded-full hover:bg-gray-400 duration-300 ease-in-out">
        <div className="text-sm flex flex-row items-center">
          Sidste
          <MdKeyboardDoubleArrowRight />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
