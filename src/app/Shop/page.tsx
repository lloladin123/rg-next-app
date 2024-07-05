import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div className="flex  items-center justify-center">
      <div className="flex flex-col w-11/12 space-y-8 text-xs py-8">
        <p>
          Nu har du mulighed for at købe tøj med Roskilde Gymnastikforenings
          logo på.
        </p>
        <p>Der kan forekomme optil 14 dages leveringstid på bestillingsvare.</p>
        <div className="flex flex-row space-x-1">
          <p>Link til login:</p>
          <Link
            className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
            target="blank"
            href="https://www.sport-direct.dk/roskilde/shop_Login"
          >
            https://www.sport-direct.dk/roskilde/shop_Login
          </Link>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Roskilde Gymnastik:</p>
          <p>Brugernavn: RGF</p>
          <p>Adgangskode: RGF</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
