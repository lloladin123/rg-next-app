import Image from "next/image";
import React from "react";
import Alexander from "@images/Alexander.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full lg:w-5/6 mx-auto items-center justify-center">
      {/* Criteria buttons */}
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
      {/* Instruktør header */}
      <div className="pt-10 border-t w-full flex items-center justify-center mt-4">
        <p className="text-3xl">Instruktør</p>
      </div>
      {/* Instructor collection */}
      <div className="flex w-full flex-col space-y-12">
        {/* Instructor box */}
        <div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full items-center justify-center md:space-x-10 p-4">
          {/* Instructor Image */}
          <div className="relative md:odd:ml-8 clip-hexagon h-80 w-80">
            <Image
              alt="Instructor Alexander"
              src={Alexander}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          {/*Instructor description */}
          <div className="flex flex-col">
            <p className="text-3xl font-bold">Alexander Thøgersen</p>
            <p className="text-sm">
              Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen
              2018/19, på et par hold der
            </p>
            {/* More information button */}
            <button className="flex flex-row space-x-1 p-1 items-center justify-center flex-nowrap w-24 bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
              <div className="text-sm">Mere info</div>
              <MdKeyboardArrowDown className="bg-white rounded-full text-rg-green scale-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
