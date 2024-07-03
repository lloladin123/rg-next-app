"use client";

import Link from "next/link";
import DateIcon from "./components/Icons/DateIcon";
import { MdArrowForwardIos } from "react-icons/md";

import "../styles/page.css";
import FacebookTimeLine from "@integrations/FacebookTimeLine";
import HoneycombPattern from "@Index/HoneycombPattern";
import IntroBox from "@Index/IntroBox";

export default function Home() {
  const today = new Date();
  return (
    <>
      <video controls={false} autoPlay muted loop width="100%">
        <source src="/videos/RgHeroFilm.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col md:flex-row bg-gray-100 justify-between p-4 space-x-4">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:flex-1 text-gray-900 p-6 bg-white">
            <h1 className="text-xl font-bold mb-4">Nyheder</h1>
            <div className="block rounded-lg shadow-md p-4 mb-4 hover-parent">
              <h2 className="text-lg text-rg-green font-semibold">
                Info. om sæson 2024/2025
              </h2>
              <p className="mt-2 text-gray-600 text-xs">29-04-2024</p>
              <p className="mt-1">
                Kære besøgende på gymnastikforeningens hjemmeside.
              </p>
              <Link href="/" className="text-rg-green">
                Læs mere...
              </Link>
            </div>
            <div className="block rounded-lg shadow-md p-4 mb-4 hover-parent">
              <h2 className="text-lg text-rg-green font-semibold">
                Info. om sæson 2024/2025
              </h2>
              <p className="mt-2 text-gray-600 text-xs">29-04-2024</p>
              <p className="mt-1">
                Kære besøgende på gymnastikforeningens hjemmeside.
              </p>
              <Link href="/" className="text-rg-green">
                Læs mere...
              </Link>
            </div>
          </div>
          <div className="lg:flex-1 text-gray-900 p-6 bg-white">
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
        </div>
        <div className="lg:flex-1 text-gray-900 p-6 bg-white">
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
            href="/Teams"
            className="hover:opacity-80 flex items-center space-x-1"
          >
            Gå til tilmedling <MdArrowForwardIos color="white" />
          </Link>
        </div>
      </HoneycombPattern>

      <IntroBox />
    </>
  );
}
