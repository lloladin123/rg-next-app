import Image from "next/image";
import React from "react";
import SpringMuseneHold from "../../images/springmuseneHold.JPEG";

const SignUp = () => {
  return (
    <div className="flex bg-white flex-col items-center w-full">
      <div className="w-3/4">
        <div className="bg-red-900 w-full flex flex-row items-center justify-center mt-2">
          <input type="text" placeholder="Søg" />
          <button className="bg-blue-500 ">Find hold</button>
        </div>
        {/* Filter buttons */}
        <div className="bg-green-900 w-50 flex flex-row items-center justify-center space-x-2 mt-2">
          <button className="bg-gray-500">Vis alle</button>
          <button className="bg-gray-500">Holdgrupper</button>
          <button className="bg-gray-500">Pladsstatus</button>
          <button className="bg-gray-500">Tidspunkt</button>
          <button className="bg-gray-500">Lokation</button>
        </div>
        {/* CardBoxsContainer */}
        <div className="space-y-4 mt-4">
          {/* Cardbox */}
          <div
            className="bg-blue-900 w-full flex flex-row"
            style={{
              height: "300px",
            }}
          >
            {/* Image */}
            <div className="bg-blue-100 w-1/2 relative">
              <Image
                alt="holdbillede"
                layout="fill"
                objectFit="cover"
                src={SpringMuseneHold}
              />
            </div>
            {/* Team Information */}
            <div className="flex flex-col w-full p-4">
              {/* Header */}
              <div className="">
                <h1>(030) Springmusene (7-10år)</h1>
              </div>
              {/* Basic information */}
              <div className="flex flex-row w-full justify-between">
                <div>
                  <p>Alder</p>
                  <p>pris</p>
                </div>
                <div>
                  <p>Dato</p>
                  <p>Lokation</p>
                </div>
                <div>
                  <p>Instruktør</p>
                  <p>Hjælpeinstruktør</p>
                </div>
              </div>
              {/* Description */}
              <div className="mt-auto">
                <h1>Beskrivelse</h1>
                <p>
                  Holder for både piger og derenge i alderen 7-10år. Der er
                  plads til alle - både begynderer og øvede...
                </p>
              </div>
              {/* Button */}
              <div className="bg-rg-green flex items-center justify-center w-full">
                <button>Læse mere & tilmeld</button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="bg-yellow-900 w-full flex flex-row items-center justify-center space-x-4 p-4 mt-4">
          <button>Første</button>
          <button>Tilbage</button>
          <p>Side 1</p>
          <button>Næste</button>
          <button>sidste</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
