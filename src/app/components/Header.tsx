"use client";

import React from "react";
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
          className="relative flex items-center justify-center"
          style={{
            width: "110px",
            height: "110px",
            zIndex: "999",
            marginTop: "8px",
          }}
        >
          <div
            className="absolute mt-11 rounded-full bg-white border-b-2 border-black"
            style={{ width: "105px", height: "105px" }}
          ></div>
          <Link href="/">
            <div
              className="mt-8"
              style={{
                width: "110px",
                height: "110px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "50%",
              }}
            >
              <Image
                src={LogoImage}
                alt="RgLogo"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </Link>
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
