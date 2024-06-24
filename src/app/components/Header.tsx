import React from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="bg-white flex" style={{ height: "100px" }}>
      <div className="my-3 ml-20">
        <Image
          src={LogoImage}
          className="absolute rounded-full"
          alt="RgLogo"
          style={{ width: "9%", height: "auto" }}
        />
      </div>
      <div className="flex justify-center items-center ml-60">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Header;
