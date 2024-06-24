import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarDropdown from "./NavBarDropdown";
import NavBarDropdownItem from "./NavBarDropdownItem";

const NavBar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex space-x-3 py-4 px-8">
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
            ></NavBarDropdown>
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
            ></NavBarDropdown>
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
            ></NavBarDropdown>
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
            ></NavBarDropdown>
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
