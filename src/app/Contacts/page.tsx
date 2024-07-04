import Image from "next/image";
import React from "react";
import Alexander from "@images/Alexander.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="flex flex-col w-5/6 mx-auto items-center justify-center">
      {/* Criteria buttons */}
      <div className="flex flex-row space-x-2 space-y-1 flex-wrap items-center justify-center">
        <button className="p-2 px-16  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          Instruktør
        </button>
        <button className="p-2 px-16  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          HjælpeInstruktør
        </button>
        <button className="p-2 px-16  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          Bestyrelse
        </button>
        <button className="p-2 px-16  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          Suppleanter
        </button>
        <button className="p-2 px-16  bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
          Kontaktpersoner
        </button>
      </div>
      {/* Instructor collection */}
      <div className="flex w-full flex-col space-y-12">
        {/* Instructor box */}
        <div className="flex flex-row even:flex-row-reverse w-full items-center justify-center space-x-20 p-4">
          {/* Instructor Image */}
          <div className="relative clip-hexagon h-80 w-2/6">
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
            <p className="">
              Jeg blev inviteret ned og hjælpe af en af mine venner, i sæsonen
              2018/19, på et par hold der
            </p>
            {/* More information button */}
            <button className="flex flex-row space-x-1 p-1 items-center flex-nowrap w-2/12 bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
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
