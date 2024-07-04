import Link from "next/link";
import React from "react";

const SelectionCommittee = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex flex-col w-10/12">
        <h1>Udvalg</h1>
        <div className="flex flex-col mt-4 space-y-4">
          {/* SoMe udvalg*/}
          <div className="flex flex-col">
            <div className="flex flex-row space-x-1">
              <h2>SoMe / hjemmeside udvalg: </h2>

              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:some@roskildegf.dk"
              >
                some@roskildegf.dk
              </Link>
            </div>
            <p>Miss Instagram - Birgitte Bjerring</p>
            <p>Line Olesen</p>
            <p>Kim Jørgensen</p>
          </div>
          {/* Opvisnings udvalg */}
          <div className="flex flex-col">
            <div className="flex flex-row space-x-1">
              <h2>Opvisnings udvalg: </h2>

              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:opvisning@roskildegf.dk"
              >
                opvisning@roskildegf.dk
              </Link>
            </div>
            <p>Line Olesen</p>
            <p>Camilla Erbo Nielsen</p>
            <p>Amalie Dawall</p>
            <p>Cecilia Møller</p>
          </div>
          {/* Festival udvalg */}
          <div className="flex flex-col">
            <div className="flex flex-row space-x-1">
              <h2>Festival udvalg:</h2>

              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:festival@roskildegf.dk"
              >
                festival@roskildegf.dk
              </Link>
            </div>
            <p>Lars Walmod</p>
            <p>Birgitte Bjerring</p>
            <p>Kim Jørgensen</p>
            <p>Bente Lindegaard Magnusson</p>
            <p>Peter Dahl</p>
            <p>Mads Fardrup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionCommittee;
