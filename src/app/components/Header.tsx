"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="relative bg-white flex justify-between items-center px-4 md:px-8"
      style={{ height: "100px" }}
    >
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
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
      <div
        className={`flex ml-auto flex-col md:flex md:flex-row md:items-center`}
      >
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
