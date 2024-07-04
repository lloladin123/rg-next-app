import React from "react";

const CriteriaButtons = () => {
  return (
    <div className="flex flex-row space-x-2 space-y-1 flex-wrap items-center justify-center">
      <button className="p-1 px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        Instruktør
      </button>
      <button className="p-1 px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        HjælpeInstruktør
      </button>
      <button className="p-1 px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        Bestyrelse
      </button>
      <button className="p-1 px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        Suppleanter
      </button>
      <button className="p-1 px-20 text-sm  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
        Kontaktpersoner
      </button>
    </div>
  );
};

export default CriteriaButtons;
