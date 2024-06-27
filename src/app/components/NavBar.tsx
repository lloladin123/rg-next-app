import React, { useEffect, useRef, useState } from "react";
import NavBarLink from "./NavBarLink";
import NavBarDropdown from "./NavBarDropdown";
import NavBarDropdownItem from "./NavBarDropdownItem";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the burger menu
import Image from "next/image";
import IntroImg2 from "../../images/introImg2.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //   console.log("Clicked outside dropdown");
      //   console.log("Event target:", event.target);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //   console.log("Removing event listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="lg:flex lg:items-center lg:justify-between">
        <div className="">
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
          ref={dropdownRef}
          className={`lg:mt-0 mt-5 p-8 space-x-1 space-y-8 lg:bg-transparent absolute lg:relative flex flex-row justify-between lg:items-center lg:py-4 lg:px-8 ${
            menuOpen ? "block" : "hidden lg:block"
          } bg-gray-200 w-full p-8`}
          style={{
            width: "100%", // Full width of the screen
            height: menuOpen ? "calc(100vh - 100px)" : "auto",
            zIndex: 998,
            left: 0, // Ensure it starts from the left edge of the screen
          }}
        >
          <div className="w-1/2 flex flex-col lg:space-x-3 justify-between lg:space-y-0 lg:flex-row">
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
          </div>
          <div className="w-3/4 sm:block hidden lg:hidden">
            <Image
              className="h-full w-full object-center object-cover"
              alt="IntroImg2"
              src={IntroImg2}
            />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
