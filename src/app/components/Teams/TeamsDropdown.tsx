import React, { useState, useRef } from "react";
import TeamsDropdownItem from "./TeamsDropdownItem"; // Adjust import path as necessary
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterTimeInput from "./FilterTimeInput";

interface MenuItem {
  name: string;
  checked: boolean;
}

interface TeamsDropDownProps {
  menuItems: MenuItem[];
  title: string;
  showTimeFilter?: boolean;
}

const TeamsDropDown: React.FC<TeamsDropDownProps> = ({
  menuItems,
  title,
  showTimeFilter = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.name] = item.checked;
      return acc;
    }, {} as Record<string, boolean>)
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (itemName: string) => {
    setCheckedItems({
      ...checkedItems,
      [itemName]: !checkedItems[itemName],
    });
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex flex-row items-center p-2"
        onClick={toggleDropdown}
      >
        {title}
        {isOpen ? (
          <IoIosArrowUp className="ml-1" />
        ) : (
          <IoIosArrowDown className="ml-1" />
        )}
      </button>
      {!showTimeFilter && (
        <div>
          {isOpen && (
            <div className="absolute">
              <ul className="text-black bg-white pr-5 min-w-60 p-2 border rounded top-0 mt-1 -ml-7 relative whitespace-nowrap">
                {menuItems.map((item, index) => (
                  <TeamsDropdownItem
                    key={index}
                    name={item.name}
                    checked={checkedItems[item.name]}
                    toggleItem={() => toggleItem(item.name)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {showTimeFilter && (
        <div>
          {isOpen && (
            <div className="absolute">
              <ul className="text-black grid grid-cols-2 gap-x-9 bg-white pr-5 min-w-60 p-2 top-0 mt-1 border rounded top-0 -ml-7 relative whitespace-nowrap">
                <li className="col-span-2">
                  <FilterTimeInput />
                </li>
                {menuItems.map((item, index) => (
                  <TeamsDropdownItem
                    key={index}
                    name={item.name}
                    checked={checkedItems[item.name]}
                    toggleItem={() => toggleItem(item.name)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamsDropDown;
