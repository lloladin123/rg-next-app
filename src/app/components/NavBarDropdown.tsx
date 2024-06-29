import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/NavBar.css";

interface NavBarDropdownProps {
  text: string;
  items: React.ReactNode[];
}

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({ text, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent click event propagation to the parent button
    event.stopPropagation();
    // Optionally, close the dropdown when an item is clicked
    setIsOpen(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-gray-600 font-semibold text-sm hover:text-gray-500 flex items-center hover:underline-green whitespace-nowrap"
        onClick={handleClick}
      >
        <span>{text}</span>
        <div className="font-bold text-black">
          <IoIosArrowDown />
        </div>
        <span className="-my-2 absolute inset-x-0 bottom-0 h-0.5 bg-rg-green underline-green"></span>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 bg-white mt-2 rounded-md shadow-lg flex flex-col items-center lg:group-hover:block"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div
              className="my-1 text-left w-full px-4 whitespace-nowrap cursor-pointer"
              key={index}
              onClick={handleItemClick} // Add onClick handler to each item
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarDropdown;
