import React from "react";
import FacebookFooterIcon from "./FacebookFooterIcon";
import dkLogo from "../../images/dk_logo.png";
import mastercardLogo from "../../images/mastercard_logo.png";
import visaElectron from "../../images/visa_electron.jpg";
import visa from "../../images/visa_logo.jpg";
import Link from "next/link";
import GoogleMapsComponent from "./GoogleMapsComponent";
import Image from "next/image";
import InstagramFooterIcon from "./InstagramFooterIcon";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col w-full md:flex-row p-8"
        style={{ backgroundColor: "#222" }}
      >
        <div className="md:w-1/2 w-full flex flex-col md:flex-row justify-around">
          {/* Box 1 */}
          <div className="p-4 flex flex-col">
            <div className="relative">
              <b>
                <h1 className="relative ml-2 z-10">Kontakt</h1>
              </b>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-rg-green z-0"></span>
            </div>
            <div className="mt-3 text-sm">
              <p>Roskilde Gymnastikforening</p>
              <p>Kildegården 1, 4000 Roskilde</p>
              <p>Tlf: 52241924</p>
              <p>E-mail: kontakt@roskildegf.dk</p>
              <p>CVR: 22583514</p>
            </div>
            <div className="mt-4 flex flex row space-x-2 items-center">
              <FacebookFooterIcon />
              <InstagramFooterIcon />
            </div>
          </div>

          {/* Box 2 */}
          <div className="p-4 flex flex-col">
            <div className="relative">
              <b>
                <h1 className="relative ml-2 z-10">Links</h1>
              </b>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-rg-green z-0"></span>
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
        <div className="md:w-1/2 w-full">
          {/* Box 3 */}
          <div className="p-4 flex">
            <GoogleMapsComponent />
          </div>
        </div>
      </div>
      <div
        className="flex p-2 flex-col md:flex-row items-center justify-around w-full"
        style={{ backgroundColor: "#383838" }}
      >
        <div className="">
          <p>© 2024 Roskilde Gymnastikforening.</p>
        </div>
        <div className="flex flex-row space-x-3">
          <Image className="w-10" alt="mastercardLogo" src={mastercardLogo} />
          <Image className="w-10" alt="dkLogo" src={dkLogo} />
          <Image className="w-10" alt="visaElectronLogo" src={visaElectron} />
          <Image className="w-10" alt="visaLogo" src={visa} />
        </div>
      </div>
    </>
  );
};

export default Footer;
