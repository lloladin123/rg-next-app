import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-4 py-4 px-8">
          <li>
            <Link href="/">FORSIDE</Link>
          </li>
          <li>
            <Link href="/">TILMELDING</Link>
          </li>
          <li>
            <Link href="/">KONTAKT</Link>
          </li>
          <li>
            <Link href="/">INFO</Link>
          </li>
          <li>
            <Link href="/">BILLEDER OG VIDEO</Link>
          </li>
          <li>
            <Link href="/">ROSKILDE FESTIVAL</Link>
          </li>
          <li>
            <Link href="/">OPRET PROFIL</Link>
          </li>
          <li>
            <Link href="/">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
