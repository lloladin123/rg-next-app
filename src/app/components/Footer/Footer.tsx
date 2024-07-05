import React from "react";
import dkLogo from "@images/dk_logo.png";
import mastercardLogo from "@images/mastercard_logo.png";
import visaElectron from "@images/visa_electron.jpg";
import visa from "@images/visa_logo.jpg";
import Link from "next/link";
import GoogleMapsComponent from "@integrations/GoogleMapsComponent";
import Image from "next/image";
import "@styles/Footer.css";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-col w-full md:flex-row p-8">
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row justify-between sm:justify-around">
          {/* Contacts */}
          <div className="p-4 flex flex-col">
            <FooterContact />
          </div>

          {/* Links */}
          <div className="p-4 flex flex-col">
            <div className="relative">
              <h1 className="font-bold relative ml-2">Links</h1>
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
          {/* Google maps */}
          <div
            className="md:w-full p-4 flex"
            style={{ position: "relative", zIndex: 0 }}
          >
            <GoogleMapsComponent />
          </div>
        </div>
      </div>
      <div className="flex p-2 flex-col md:flex-row items-center justify-around w-full footer-bar">
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
    </div>
  );
};

export default Footer;
