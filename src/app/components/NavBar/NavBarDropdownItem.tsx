import Link from "next/link";
import React from "react";

interface NavBarDropdownItemProp {
  text: string;
  href: string;
}

const NavBarDropdownItem: React.FC<NavBarDropdownItemProp> = ({
  text,
  href,
}) => {
  return (
    <div>
      <Link
        href={href}
        className="my-1 text-left w-full font-normal text-gray-500 hover:text-gray-400 px-4 whitespace-nowrap"
      >
        {text}
      </Link>
    </div>
  );
};

export default NavBarDropdownItem;
