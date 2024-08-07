"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "@images/RgLogo.jpg";
import NavBar from "@NavBar/NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div
        className="fixed zIndex-998 w-full bg-white flex justify-between items-center px-4 md:px-8 border-b-2 border-black"
        style={{ height: "90px", zIndex: "998" }}
      >
        {/* Image */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ zIndex: "999" }}
        >
          <Link href="/">
            <Image
              src={LogoImage}
              className="mt-8 rounded-full hover:opacity-75 transition-opacity duration-300"
              alt="RgLogo"
              width={110}
              height={110}
            />
          </Link>
        </div>
        {/* Navbar */}
        <div className={`flex ml-auto`}>
          <NavBar />
        </div>
      </div>
      <div
        className="w-full"
        style={{ backgroundColor: "white", height: "90px" }}
      ></div>
    </>
  );
};

export default Header;
