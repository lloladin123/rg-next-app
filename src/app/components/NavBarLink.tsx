import React from "react";
import Link from "next/link";

interface NarBarLinkProps {
  href: string;
  text: string;
}

const NavBarLink: React.FC<NarBarLinkProps> = (href, text) => {
  return (
    <>
      <li>
        <Link href={href}>text</Link>
      </li>
    </>
  );
};

export default NavBarLink;
