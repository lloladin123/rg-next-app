"use client";

import Link from "next/link";
import DateIcon from "./components/DateIcon";
import { MdArrowForwardIos } from "react-icons/md";

import "../styles/page.css";
import FacebookTimeLine from "./components/FacebookTimeLine";
import HoneycombPattern from "./components/HoneycombPattern";
import IntroBox from "./components/IntroBox";

export default function Home() {
  const today = new Date();
  return (
    <>
      <video controls={false} autoPlay muted loop width="100%">
        <source src="/videos/RgHeroFilm.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col sm:flex-row bg-white justify-between p-4 space-x-4">
        <div className="lg:flex-1 text-gray-900 p-6">
          <h1 className="text-xl font-bold mb-4">Nyheder</h1>
          <Link
            href="/"
            className="block rounded-lg shadow-md p-4 mb-4 hover-parent"
          >
            <h2 className="text-lg text-blue-400 font-semibold">
              Info. om sæson 2024/2025
            </h2>
            <p className="mt-2 text-gray-600 text-xs">29-04-2024</p>
            <p className="mt-1">
              Kære besøgende på gymnastikforeningens hjemmeside.
            </p>
            <p className="text-blue-400">Læs mere...</p>
          </Link>
          <Link
            href="/"
            className="block rounded-lg shadow-md p-4 mb-4 hover-parent"
          >
            <h2 className="text-lg text-blue-400 font-semibold">
              Info. om sæson 2024/2025
            </h2>
            <p className="mt-2 text-gray-600 text-xs">29-04-2024</p>
            <p className="mt-1">
              Kære besøgende på gymnastikforeningens hjemmeside.
            </p>
            <p className="text-blue-400">Læs mere...</p>
          </Link>
        </div>
        <div className="lg:flex-1 text-gray-900 p-6">
          <h1 className="text-xl font-bold mb-4">Arrangementer</h1>
          <Link
            href="/"
            className="rounded-lg shadow-md p-4 mb-4 hover-parent flex items-start space-x-4"
          >
            <DateIcon date={today} />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Open Dance Fit</h2>
              <p className="text-xs text-gray-600">26-06-2024</p>
            </div>
          </Link>
          <Link
            href="/"
            className="rounded-lg shadow-md p-4 mb-4 hover-parent flex items-start space-x-4"
          >
            <DateIcon date={today} />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Open Dance Fit</h2>
              <p className="text-xs text-gray-600">26-06-2024</p>
            </div>
          </Link>
        </div>
        <div className="lg:flex-1 text-gray-900 p-6">
          <h1 className="text-xl font-bold mb-4">Facebook</h1>
          <FacebookTimeLine />
        </div>
      </div>
      <HoneycombPattern>
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-2xl text-white font-bold mb-4">
            Bliv medlem af Roskilde Gymnastikforening i dag
          </h1>
          <Link
            href="/"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            Gå til tilmedling <MdArrowForwardIos color="white" />
          </Link>
        </div>
      </HoneycombPattern>

      <IntroBox />
    </>
  );
}
