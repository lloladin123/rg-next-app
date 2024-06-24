"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white flex" style={{ height: "100px" }}>
      <div className="my-3 ml-20">
        <Link href="/">
          <Image
            src={LogoImage}
            className="absolute rounded-full hover:opacity-75 transition-opacity duration-300"
            alt="RgLogo"
            style={{ width: "110px", height: "auto" }}
          />
        </Link>
      </div>
      {isMobile ? null : (
        <div className="flex justify-center items-center ml-20 sm:ml-30 md:ml-40 lg:ml-60">
          <NavBar></NavBar>
        </div>
      )}
    </div>
  );
};

export default Header;
