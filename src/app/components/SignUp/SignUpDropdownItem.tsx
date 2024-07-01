import React from "react";

interface SignUpDropdownItemProps {
  name: string;
}

const SignUpDropdownItem: React.FC<SignUpDropdownItemProps> = ({ name }) => {
  return (
    <div className="flex flex-row space-x-1">
      <input
        type="checkbox"
        className="rounded border-gray-300 text-rg-green shadow-sm focus:border-rg-green focus:ring focus:ring-rg-green focus:ring-opacity-50"
      />
      <li>{name}</li>
    </div>
  );
};

export default SignUpDropdownItem;
