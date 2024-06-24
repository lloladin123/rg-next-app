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
        className={`block text-sm text-gray-600 hover:text-gray-300 relative ${
          showUnderline ? "hover:underline-blue" : ""
        }`}
      >
        {text}
        {showUnderline && (
          <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 underline-blue"></span>
        )}
      </Link>
    </>
  );
};

export default NavBarLink;
