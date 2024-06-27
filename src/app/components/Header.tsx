"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="bg-white flex md:justify-around"
      style={{ height: "100px" }}
    >
      <div className="my-3">
        <Link href="/">
          <Image
            src={LogoImage}
            className="absolute rounded-full hover:opacity-75 transition-opacity duration-300"
            alt="RgLogo"
            style={{ width: "110px", height: "auto" }}
          />
        </Link>
      </div>
      <div className="flex justify-around items-center">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Header;
