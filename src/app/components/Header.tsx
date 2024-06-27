"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust 100 to the height after which you want the header to be fixed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white flex justify-between items-center px-4 md:px-8 ${
        isFixed ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
      }`}
      style={{ height: "100px" }}
    >
      <div className="relative">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="RgLogo"
            width={110}
            height={110}
            className="rounded-full hover:opacity-75 transition-opacity duration-300"
          />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
