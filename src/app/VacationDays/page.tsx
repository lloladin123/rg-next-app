import Link from "next/link";
import React from "react";

const VacationDays = () => {
  return (
    <div className="min-h-screen flex flex-col text-black p-16 space-y-4 text-sm">
      <p>Roskilde Gymnastikforening følger Roskilde kommunens skoleferier.</p>
      <p>Husk at vinterferien ligger i uge 8. </p>
      <Link
        className="pt-8 text-rg-green hover:text-link-hover duration-300 ease-in-out"
        href="https://www.roskilde.dk/da-dk/service-og-selvbetjening/borger/skole-og-uddannelse/folkeskole/skoleferier-og-lukkedage/"
      >
        Se Roskilde kommunes ferier her.
      </Link>
    </div>
  );
};

export default VacationDays;
