import React from "react";
import FacebookFooterIcon from "./FacebookFooterIcon";
import Link from "next/link";
import GoogleMapsComponent from "./GoogleMapsComponent";

const Footer = () => {
  return (
    <>
      <div className="flex w-full p-8" style={{ backgroundColor: "#222" }}>
        <div className="w-1/2 flex flex-row justify-around">
          {/* Box 1 */}
          <div className="w-70 p-4 flex flex-col">
            <div className="relative">
              <b>
                <h1 className="relative ml-2 z-10">Kontakt</h1>
              </b>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 z-0"></span>
            </div>
            <div className="mt-3 text-sm">
              <p>Roskilde Gymnastikforening</p>
              <p>Kildegården 1, 4000 Roskilde</p>
              <p>Tlf: 52241924</p>
              <p>E-mail: kontakt@roskildegf.dk</p>
              <p>CVR: 22583514</p>
            </div>
            <div className="mt-4">
              <FacebookFooterIcon />
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-70 p-4 flex flex-col">
            <div className="relative">
              <b>
                <h1 className="relative ml-2 z-10">Links</h1>
              </b>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-blue-500 z-0"></span>
            </div>
            <ul className="mt-2 text-sm list-disc">
              <Link href="/">
                <li className="ml-3 hover:opacity-80 transition-all duration-300 ease-in-out">
                  Brugerbetingelser
                </li>
              </Link>
              <Link href="/">
                <li className="ml-3 hover:opacity-80 transition-all duration-300 ease-in-out">
                  Privatlivspolitik
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          {/* Box 3 */}
          <div className="w-70 p-4 flex">
            <GoogleMapsComponent />
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-around w-full"
        style={{ backgroundColor: "#383838" }}
      >
        <div className="w-1/4 p-4">
          <p>© 2024 Roskilde Gymnastikforening.</p>
        </div>
        <div className="w-1/4 p-4"></div>
      </div>
    </>
  );
};

export default Footer;
