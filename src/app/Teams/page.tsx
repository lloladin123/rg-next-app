import React from "react";
import SearchBar from "@Teams/SearchBar";
import FilterButton from "@Teams/FilterButtons";
import TeamsCardBox from "@Teams/TeamsCardBox";
import SpringMuseneHold from "@images/SpringmuseneHold.jpeg";
import Pagination from "../components/Teams/Pagination";

const Teams = () => {
  const teamName = "(030) Springmusene (7-10år)";
  const age = "7-10";
  const price = 2150;
  const startDate = new Date("2024-09-02");
  const endDate = new Date("2025-06-16");
  const instructors = ["Alexander Thøgersen", "Kim Lauer"];
  const instructorsAid = ["Frida Mandrup", "Frida Mandrup"];
  const description =
    "Holder for både piger og drenge i alderen 7-10år. Der er plads til alle - både begyndere og øvede...";
  const cardImage = SpringMuseneHold;
  return (
    <div className="flex bg-white flex-col items-center w-full">
      <div className="w-full p-3 sm:p-0 md:w-5/6 mt-4">
        <SearchBar />
        <div className="relative z-10">
          <FilterButton />
        </div>
        <Pagination />

        {/* CardBoxsContainer */}
        <div className="border-t">
          <div className="relative z-1 space-y-4 mt-4">
            <TeamsCardBox
              teamName={teamName}
              age={age}
              price={price}
              startDate={startDate}
              endDate={endDate}
              instructors={instructors}
              instructorsAid={instructorsAid}
              description={description}
              cardImage={cardImage}
            />
            <TeamsCardBox
              teamName={teamName}
              age={age}
              price={price}
              startDate={startDate}
              endDate={endDate}
              instructors={instructors}
              instructorsAid={instructorsAid}
              description={description}
              cardImage={cardImage}
            />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Teams;
