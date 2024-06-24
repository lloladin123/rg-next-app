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
        className="hover:bg-gray-700 hover:text-white flex items-center hover:underline-blue"
        onClick={toggleDropdown}
      >
        <span>{text}</span>
        <IoIosArrowDown />
        <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 underline-blue"></span>{" "}
      </button>

      {isOpen && (
        <div
          className="absolute z-10 bg-gray-800 text-gray-300 w-40 mt-2 rounded-md shadow-lg"
          ref={dropdownRef}
        >
          {items.map((item, index) => (
            <div key={index}>{item}</div> // Render each item received from parent
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
