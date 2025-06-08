import React from "react";
import Image, { StaticImageData } from "next/image";
import Springmusene from "@images/SpringmuseneHold.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

import Link from "next/link";
import InstructorCard from "@Team/InstructorCard";

interface TeamPageProps {
  title: string;
  age: string;
  price: string;
  dateFromTo: string;
  day: string;
  instructors: { name: string; image?: string }[];
  helpers: { name: string; image?: string }[];
  description: string[];
}

const TeamPage: React.FC<TeamPageProps> = ({
  title,
  age,
  price,
  dateFromTo,
  day,
  instructors,
  helpers,
  description,
}) => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 flex flex-col mx-auto">
      <div className="mt-4">
        {/* Team card and description container*/}
        <div>
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-3/6 h-60 lg:h-auto relative overflow-hidden ">
              <Image
                className=""
                alt="Springmusenebillede"
                src={Springmusene}
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-full p-2">
              {/* Title */}
              <div className="relative flex flex-row space-x-3 items-center">
                <span className="absolute inset-y-0 left-0 w-1 bg-rg-green z-0"></span>
                <h1 className="text-2xl font-normal">{title}</h1>
              </div>
              <div className="flex flex-col lg:flex-row mt-2">
                {/* Left side card information container */}
                <div className="flex flex-col p-2 space-y-2 w-full lg:w-4/5 w-full ">
                  {/* Age */}
                  <div className="flex flex-row w-full space-x-32">
                    <div className="flex flex-row space-x-1">
                      <FaChildren className="text-rg-green mt-1" />
                      <p>Alder: </p>
                    </div>
                    <p className="font-extralight">{age}</p>
                  </div>
                  {/* Price */}
                  <div className="flex flex-row w-full space-x-32">
                    <div className="flex flex-row space-x-1">
                      <FaRegMoneyBillAlt className="text-rg-green mt-1" />
                      <p>Pris: </p>
                    </div>
                    <p className="font-extralight">{price}</p>
                  </div>
                  {/* Payment options buttons*/}
                  <div className="flex flex-row space-x-1">
                    <Link
                      className="flex flex-row p-1 text-white rounded-2xl bg-rg-green hover:opacity-50  duration-300 ease-in-out"
                      href="/"
                    >
                      <IoIosCheckmark className="mt-1 text-white" /> Samlet
                      betaling
                    </Link>
                    <Link
                      className="rounded-2xl border p-1 text-black hover:opacity-50 hover:border-green-900 duration-300 ease-in-out"
                      href="/"
                    >
                      Ratebetaling
                    </Link>
                    <RxQuestionMarkCircled className="mt-2 text-black rounded-full hover:text-white hover:bg-rg-green duration-300 ease-in-out" />
                  </div>
                </div>
                {/* Right side card information container */}
                <div className="flex flex-col space-y-2 w-full lg:w-3/5 p-2">
                  {/* Date to and from */}
                  <div className="flex flex-row space-x-2">
                    <FaRegCalendarDays className="text-rg-green mt-1" />
                    <p className="font-extralight">{dateFromTo}</p>
                  </div>
                  {/* Location*/}
                  <div className="flex flex-row space-x-2">
                    <FaMapMarkerAlt className="text-rg-green mt-1" />
                    <div className="flex flex-col">
                      <p>Kildegårdshallen (Hallen)</p>
                      <p className="font-extralight">{day}</p>
                    </div>
                  </div>
                  {/* Instructors*/}
                  <div className="flex flex-row space-x-2">
                    <FaUser className="text-rg-green mt-1" />
                    <div className="flex flex-col">
                      <p>Instruktører</p>
                      {instructors.map((instructor, index) => (
                        <div key={index}>
                          <p className="font-extralight"> {instructor.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Helpers */}
                  <div className="flex flex-row space-x-2">
                    <FaUser className="text-rg-green mt-1" />
                    <div className="flex flex-col">
                      <p>Hjælperer</p>
                      {helpers.map((helper, index) => (
                        <div key={index}>
                          <p className="font-extralight"> {helper.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-row space-x-1 p-8">
            <IoInformationCircleSharp className="text-rg-green mt-1 w-12" />
            <div className="flex flex-col">
              <p>Beskrivelse</p>
              <div className="font-extralight">
                <p className="flex flex-col space-y-2">
                  {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* middlebar with price and apply buttons */}
        <div className="mt-16">
          {/* Price and border */}
          <div className="border-b py-2">
            <div className="relative flex flex-row space-x-3">
              <span className="absolute inset-y-0 left-0 w-1 bg-rg-green z-0"></span>
              <p className="text-2xl">Pris: {price}</p>
            </div>
          </div>
          {/* Buttons for Aplying */}
          <div className="flex flex-row mt-4 space-x-1">
            <Link
              className="flex flex-row space-x-1 bg-rg-green p-2 rounded-2xl hover:opacity-50 duration-300 ease-in-out"
              href="/"
            >
              <FaUserPlus className="mt-1" />
              <div>Jeg har ingen profil - Opret og tilmeld</div>
            </Link>
            <Link
              className="flex flex-row space-x-1 bg-rg-green p-2 rounded-2xl hover:opacity-50 duration-300 ease-in-out"
              href="/"
            >
              <FaUnlock className="mt-1" />
              <div>Jeg har en profil - Login og tilmeld</div>
            </Link>
          </div>
        </div>
        {/* Instructor cards */}
        <div className="flex flex-col mt-16 mb-16">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5">
            {/* Instructor */}
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={index}
                name={instructor.name}
                image={instructor.image}
              />
            ))}
            {/* Helpers */}
            {helpers.map((helper, index) => (
              <InstructorCard
                key={index}
                name={helper.name}
                isHelper
                image={helper.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
