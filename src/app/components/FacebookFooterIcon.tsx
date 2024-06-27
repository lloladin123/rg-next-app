import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";

const FacebookFooterIcon = () => {
  return (
    <Link
      href="/"
      className="w-12 h-6 flex bg-blue-900 items-center justify-center rounded-sm hover:scale-125 hover:opacity-80 transition-all duration-300 ease-in-out"
    >
      <FaFacebookF size={25} />
    </Link>
  );
};

export default FacebookFooterIcon;
