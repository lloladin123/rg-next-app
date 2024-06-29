"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div
        className="fixed zIndex-998 w-full bg-white flex justify-between items-center px-4 md:px-8 border-b-2 border-black"
        style={{ height: "90px", zIndex: "998" }}
      >
        <div
          className="relative mt-8 flex items-center justify-center"
          style={{ width: "110px", height: "110px", zIndex: "999" }}
        >
          <div
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{ zIndex: "999" }}
          >
            <Link href="/">
              <Image
                src={LogoImage}
                className="rounded-full hover:opacity-75 transition-opacity duration-300"
                alt="RgLogo"
              />
            </Link>
          </div>
          <div
            className="rounded-full mt-4 absolute bg-white border-b-2 border-black overflow-hidden"
            style={{ width: "103px", height: "103px" }}
          ></div>
        </div>
        <div className={`flex ml-auto`}>
          <NavBar />
        </div>
      </div>
      <div
        className="bg-white w-full"
        style={{
          height: "90px",
        }}
      ></div>
    </>
  );
};

export default Header;
