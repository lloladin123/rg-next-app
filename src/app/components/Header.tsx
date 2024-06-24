import React from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white flex" style={{ height: "100px" }}>
      <div className="my-3 ml-20">
        <Link href="/">
          <Image
            src={LogoImage}
            className="absolute rounded-full hover:opacity-75 transition-opacity duration-300"
            alt="RgLogo"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center ml-60">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Header;
