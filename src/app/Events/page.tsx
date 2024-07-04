import React from "react";
import { FaRegCalendarTimes } from "react-icons/fa";

const Events = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col items-center pt-8 p-2 space-y-4">
        <h1 className="text-2xl">Eventoversigt</h1>
        <div className="flex flex-row space-x-1">
          <FaRegCalendarTimes className="text-black mt-1" />
          <p>Der er ingen kommende events på nuværende tidspunkt</p>
          <FaRegCalendarTimes className="text-black mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Events;
