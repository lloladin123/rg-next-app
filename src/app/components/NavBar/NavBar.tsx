import React, { useEffect, useRef, useState } from "react";
import NavBarLink from "@/app/components/NavBar/NavBarLink";
import NavBarDropdown from "@/app/components/NavBar/NavBarDropdown";
import NavBarDropdownItem from "@/app/components/NavBar/NavBarDropdownItem";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the burger menu
import Image from "next/image";
import IntroImg2 from "@images/introImg2.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = ""; // Cleanup: ensure scrolling is enabled
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Ensure scrolling is enabled when component unmounts
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="lg:flex lg:items-center lg:justify-between">
        <div className="">
          <div className="text-xl font-bold">Logo</div>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Navbar */}
        <ul
          ref={dropdownRef}
          className={`lg:mt-0 mt-4 p-8 space-x-1 space-y-8 lg:bg-transparent absolute lg:relative flex flex-row justify-between lg:items-center lg:py-4 lg:px-8 ${
            menuOpen ? "block" : "hidden lg:block"
          } bg-gray-200 w-full p-8`}
          style={{
            width: "100%",
            height: menuOpen ? "calc(100vh - 100px)" : "auto",
            zIndex: 998,
            left: 0,
          }}
        >
          {/* List elements */}
          <div className="w-1/4 flex flex-col lg:space-x-3 justify-between lg:space-y-0 lg:flex-row">
            {/* Front page */}
            <li>
              <NavBarLink href="/" text={"Forside".toUpperCase()} />
            </li>
            {/* Teams and events */}
            <li>
              <NavBarDropdown
                items={[
                  <NavBarDropdownItem
                    key="holdtilmedling"
                    href="/Teams"
                    text={"Holdtilmedling".toUpperCase()}
                  />,
                  <NavBarDropdownItem
                    key="events"
                    href="/Events"
                    text={"Events".toUpperCase()}
                  />,
                ]}
                text={"Tilmelding".toUpperCase()}
              />
            </li>
            {/* Contact */}
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
                    href="/Contacts"
                    text={"Bestyrelse og Instruktører".toUpperCase()}
                  />,
                ]}
                text={"Kontakt".toUpperCase()}
              />
            </li>
            {/* Info */}
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
            {/* Images and videos */}
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
            {/* Roskilde Festival */}
            <li>
              <NavBarLink href="/" text={"Roskilde Festival".toUpperCase()} />
            </li>
            {/* Create user */}
            <li>
              <NavBarLink href="/" text={"Opret Profil".toUpperCase()} />
            </li>
            {/* Login */}
            <li>
              <NavBarLink href="/" text={"Login".toUpperCase()} />
            </li>
          </div>
          {/* Mobile Image */}
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
