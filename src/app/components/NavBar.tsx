import React, { useState } from "react";
import NavBarLink from "./NavBarLink";
import NavBarDropdown from "./NavBarDropdown";
import NavBarDropdownItem from "./NavBarDropdownItem";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the burger menu

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="flex justify-between items-center px-4 py-4 lg:py-0 lg:px-0">
          <div className="text-xl font-bold">Logo</div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <ul
          className={`lg:mt-0 mt-4 w-full bg-white lg:bg-transparent absolute lg:relative lg:flex lg:items-center lg:space-x-3 lg:py-4 lg:px-8 ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <NavBarLink href="/" text={"Forside".toUpperCase()} />
          </li>
          <li>
            <NavBarDropdown
              items={[
                <NavBarDropdownItem
                  key="holdtilmedling"
                  href="/"
                  text={"Holdtilmedling".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="events"
                  href="/"
                  text={"Events".toUpperCase()}
                />,
              ]}
              text={"Tilmelding".toUpperCase()}
            />
          </li>
          <li>
            <NavBarDropdown
              items={[
                <NavBarDropdownItem
                  key="kontaktpersoner"
                  href="/"
                  text={"Kontaktpersoner".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="udvalg"
                  href="/"
                  text={"Udvalg".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="bestyrelse og instruktører"
                  href="/"
                  text={"Bestyrelse og Instruktører".toUpperCase()}
                />,
              ]}
              text={"Kontakt".toUpperCase()}
            />
          </li>
          <li>
            <NavBarDropdown
              items={[
                <NavBarDropdownItem
                  key="ferier"
                  href="/"
                  text={"Ferier".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="vedtægter"
                  href="/"
                  text={"Vedtægter".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="referater og årsrapperter"
                  href="/"
                  text={"Referater & Årsrapporter".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="vedtægter"
                  href="/"
                  text={"Vedtægter".toUpperCase()}
                />,
                <NavBarDropdownItem
                  key="omRG"
                  href="/"
                  text={"Om Roskilde Gymnastikforening".toUpperCase()}
                />,
              ]}
              text={"Info".toUpperCase()}
            />
          </li>
          <li>
            <NavBarDropdown
              items={[
                <NavBarDropdownItem
                  key="billeder"
                  href="/"
                  text={"Billeder".toUpperCase()}
                />,
              ]}
              text={"Billeder og Videor".toUpperCase()}
            />
          </li>
          <li>
            <NavBarLink href="/" text={"Roskilde Festival".toUpperCase()} />
          </li>
          <li>
            <NavBarLink href="/" text={"Opret Profil".toUpperCase()} />
          </li>
          <li>
            <NavBarLink href="/" text={"Login".toUpperCase()} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
