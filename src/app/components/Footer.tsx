import React from "react";
import FacebookFooterIcon from "./FacebookFooterIcon";

const Footer = () => {
  return (
    <>
      <div
        className="flex justify-center w-full space-x-32"
        style={{ backgroundColor: "#222" }}
      >
        {/* Box 1 */}
        <div className="w-70 p-4 flex flex-col">
          <h1>Kontakt</h1>
          <p>Roskilde Gymnastikforening</p>
          <p>Kildegården 1, 4000 Roskilde</p>
          <p>Tlf: 52241924</p>
          <p>E-mail: kontakt@roskildegf.dk</p>
          <p>CVR: 22583514</p>
          <div className="mt-4">
            <FacebookFooterIcon />
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-70 p-4 flex flex-col">
          <h1>Links</h1>
          <p>Brugerbetingelser</p>
          <p>Privatlivspolitik</p>
        </div>

        {/* Box 3 */}
        <div className="w-70 p-4 flex">
          <p>Google maps</p>
        </div>
      </div>
      <div
        className="flex items-center justify-around w-full"
        style={{ backgroundColor: "#383838" }}
      >
        <div className="w-1/4 p-4">
          <p>© 2024 Roskilde Gymnastikforening.</p>
        </div>
        <div className="w-1/4 p-4"></div>
      </div>
    </>
  );
};

export default Footer;
