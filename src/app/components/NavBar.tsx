import Link from "next/link";
import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarDropdown from "./NavBarDropdown";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-4 py-4 px-8">
          <li>
            <NavBarLink href="/" text={"Forside".toUpperCase()} />
          </li>
          <li>
            <NavBarDropdown
              items={[
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Holdtilmedling".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
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
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Kontaktpersoner".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Udvalg".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
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
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Ferier".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Vedtægter".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Referater & Årsrapporter".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Vedtægter".toUpperCase()}
                />,
                <NavBarLink
                  showUnderline={false}
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
                <NavBarLink
                  showUnderline={false}
                  href="/"
                  text={"Billeder".toUpperCase()}
                />,
              ]}
              text="Billeder og Videor"
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
