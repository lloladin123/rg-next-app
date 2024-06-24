import React from "react";
import Image from "next/image";
import LogoImage from "../../images/RgLogo.jpg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <Image src={LogoImage} alt="RgLogo" />
      <NavBar></NavBar>
    </>
  );
};

export default Header;
