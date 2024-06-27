import React from "react";
import instagramLogo from "../../images/Instagram_logo.svg.png";
import Image from "next/image";
import Link from "next/link";

const InstagramFooterIcon = () => {
  return (
    <Link
      target="blank"
      href="https://www.instagram.com/roskilde_gymnastikforening/?hl=en"
      className="w-8 hover:opacity-80 hover:scale-125 duration-300 ease-in-out"
    >
      <Image alt="InstagramLogo" src={instagramLogo} />{" "}
    </Link>
  );
};

export default InstagramFooterIcon;
