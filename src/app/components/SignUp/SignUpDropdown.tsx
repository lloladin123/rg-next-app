import React, { useState } from "react";
import SignUpDropdownItem from "@SignUp/SignUpDropdownItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterTimeInput from "./FilterTimeInput";

interface MenuItem {
  name: string;
}

interface SignUpDropDownProps {
  menuItems: MenuItem[];
  title: string;
  showTimeFilter?: boolean;
}

const SignUpDropDown: React.FC<SignUpDropDownProps> = ({
  menuItems,
  title,
  showTimeFilter = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
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
            <ul className="text-black bg-white pr-5 min-w-60 p-2 border rounded top-0 mt-11 -ml-7  absolute whitespace-nowrap">
              {menuItems.map((item, index) => (
                <SignUpDropdownItem key={index} name={item.name} />
              ))}
            </ul>
          )}
        </div>
      )}
      {showTimeFilter && (
        <div>
          {isOpen && (
            <div className="">
              <ul className="text-black grid grid-cols-2 gap-x-9 bg-white pr-5 min-w-60 p-2 top-0 mt-11 border rounded top-0  -ml-7  absolute whitespace-nowrap">
                <li className="col-span-2">
                  <FilterTimeInput />
                </li>
                {menuItems.map((item, index) => (
                  <SignUpDropdownItem key={index} name={item.name} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUpDropDown;
