import React from "react";
import SearchBar from "@SignUp/SearchBar";
import FilterButton from "@SignUp/FilterButtons";
import SignUpCardBox from "@SignUp/SignUpCardBox";
import SpringMuseneHold from "@images/SpringmuseneHold.jpeg";

const SignUp = () => {
  const teamName = "(030) Springmusene (7-10år)";
  const age = 7;
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
      <div className="w-6/7 mt-4">
        <SearchBar />
        <div className="relative z-10">
          <FilterButton />
        </div>
        {/* CardBoxsContainer */}
        <div className="border-t">
          <div className="relative z-1 space-y-4 mt-4">
            <SignUpCardBox
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
