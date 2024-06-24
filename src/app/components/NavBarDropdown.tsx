"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/NavBar.css";

interface NavBarDropownProps {
  text: string;
  items: React.ReactNode[];
}

const NavBarDropdown: React.FC<NavBarDropownProps> = ({ text, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //   console.log("Clicked outside dropdown");
      //   console.log("Event target:", event.target);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //   console.log("Removing event listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-600 font-semibold text-sm hover:text-gray-500 flex items-center hover:underline-green font-sans"
        onClick={toggleDropdown}
      >
        <span>{text}</span>
        <div className="font-bold text-black">
          <IoIosArrowDown />
        </div>
        <span className="-my-2 absolute inset-x-0 bottom-0 h-0.5 bg-green-800 underline-green"></span>{" "}
      </button>

      {isOpen && (
        <div
          className="absolute z-10 bg-white mt-2 rounded-md shadow-lg flex flex-col items-center"
          ref={dropdownRef}
        >
          {items.map((item, index) => (
            <div
              className="my-1 text-left w-full px-4 whitespace-nowrap"
              key={index}
            >
              {item}
            </div> // Render each item received from parent
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
