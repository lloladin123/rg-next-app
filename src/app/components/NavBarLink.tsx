import React from "react";
import Link from "next/link";
import "../../styles/NavBar.css";

interface NarBarLinkProps {
  href: string;
  text: string;
  showUnderline?: boolean;
}

const NavBarLink: React.FC<NarBarLinkProps> = ({
  href,
  text,
  showUnderline = true,
}) => {
  return (
    <>
      <Link
        href={href}
        className={`block text-sm font-semibold text-gray-500 hover:text-gray-400 relative ${
          showUnderline ? "hover:underline-green" : ""
        }`}
      >
        {text}
        {showUnderline && (
          <span className="-my-2 absolute inset-x-0 bottom-0 h-0.5 bg-green-800 underline-green"></span>
        )}
      </Link>
    </>
  );
};

export default NavBarLink;
