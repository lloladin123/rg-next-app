import React from "react";
import "../../styles/HoneycombPattern.css";

interface HoneycombPatternProp {
  children: React.ReactNode;
}

const HoneycombPattern: React.FC<HoneycombPatternProp> = ({ children }) => {
  return (
    <div className="bg-rg-green">
      <div className="honeycombBackground w-full">
        {children}
        <div className="honeycombPattern"></div>
      </div>
    </div>
  );
};

export default HoneycombPattern;
