import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-center mt-4">
      <input
        className="rounded-l-full text-black rounded-r-none border border-gray-300 pr-20 px-3 h-10 focus:border-blue-400 focus:outline-none focus:border-4 focus:ring-gray-500"
        type="text"
        placeholder="Søg hold fx Barn, Unge osv."
      />
      <button className="bg-rg-green text-white rounded-r-full flex flex-row items-center rounded-l-none px-2 h-10 focus:border-blue-400 focus:border-4 hover:bg-green-700 duration-300 ease-in-out">
        <FaSearch /> <div className="ml-1 text-white">Find hold</div>
      </button>
    </div>
  );
};

export default SearchBar;
