import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";

interface SignUpCardBoxProps {
  teamName: string;
  age: string;
  price: number;
  startDate: Date;
  endDate: Date;
  instructors: string[];
  instructorsAid: string[];
  description: string;
  cardImage: string;
}

const SignUpCardBox: React.FC<SignUpCardBoxProps> = ({
  teamName,
  age,
  price,
  startDate = new Date(),
  endDate = new Date(),
  instructors,
  instructorsAid,
  description,
  cardImage,
}) => {
  const dateRange = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  const location = "Kildegårdshallen (Hallen)";
  const time = "Mandag 16:00-17:45";
  const descriptionText =
    "Holder for både piger og drenge i alderen 7-10år. Der er plads til alle - både begyndere og øvede...";

  return (
    <>
      {/* Cardbox */}
      <Link
        href="/Team"
        className="bg-white border shadow-lg rounded-3xl w-full flex flex-row hover:shadow-full duration-300 ease-in-out"
        style={{ height: "310px" }}
      >
        {/* Image */}
        <div className="relative" style={{ width: "350px" }}>
          <Image
            className="rounded-3xl overflow-hidden"
            alt="holdbillede"
            layout="fill"
            objectFit="cover"
            src={cardImage}
          />
        </div>
        {/* Team Information */}
        <div className="flex flex-col w-full px-4 ml-4 py-2">
          {/* Header */}
          <div className="relative p-2">
            <span className="absolute inset-y-0 left-0 w-1 bg-rg-green"></span>
            <h1 className="ml-1 text-xl font-normal">{teamName}</h1>
          </div>
          {/* Basic information */}
          <div className="flex flex-row w-full justify-between pr-14 p-1">
            <div>
              <div className="flex flex-row space-x-1 items-center">
                <div className="text-rg-green">
                  <FaRegCalendarDays />
                </div>
                <div className="flex flex-row space-x-1">
                  <p>Alder:</p>
                  <p className="font-extralight">{age}</p>
                </div>
              </div>
              <div className="flex flex-row space-x-1 items-center">
                <div className="text-rg-green">
                  <FaRegMoneyBillAlt />
                </div>
                <div className="flex flex-row space-x-1">
                  <p>pris:</p>
                  <p className="font-extralight">{price} dkk</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row space-x-1 items-center">
                <div className="text-rg-green">
                  <FaRegCalendarDays />
                </div>
                <p className="font-extralight">{dateRange}</p>
              </div>
              <div className="flex flex-row space-x-1">
                <div className="text-rg-green">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col">
                  <p>{location}</p>
                  <p className="font-extralight">{time}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="text-rg-green mt-1">
                    <FaUser />
                  </div>
                  <div className="flex flex-col">
                    <p>Instruktør</p>
                    {instructors.map((instructor, index) => (
                      <p key={index} className="font-extralight">
                        {instructor}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="text-rg-green mt-1">
                    <FaUser />
                  </div>
                  <div className="flex flex-col">
                    <p>Hjælpe Instruktør</p>
                    {instructorsAid.map((aid, index) => (
                      <p className="font-extralight" key={index}>
                        {aid}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-auto mb-2">
            <div className="flex flex-row items-start space-x-2">
              <div className="text-rg-green mt-1 ">
                <IoInformationCircleSharp />
              </div>
              <h1>Beskrivelse</h1>
            </div>
            <p className="font-extralight ml-6">{description}</p>
          </div>
          {/* Button */}
          <div className="bg-rg-green rounded-xl p-2 mb-2 flex items-center justify-center w-full">
            <button className="">Læse mere & tilmeld</button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SignUpCardBox;
