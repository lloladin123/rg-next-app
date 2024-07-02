import React from "react";

interface TeamsDropdownItemProps {
  name: string;
  checked: boolean;
  toggleItem: () => void;
}

const TeamsDropdownItem: React.FC<TeamsDropdownItemProps> = ({
  name,
  checked,
  toggleItem,
}) => {
  return (
    <div className="flex flex-row space-x-1">
      <input
        type="checkbox"
        className="rounded border-gray-300 text-rg-green shadow-sm focus:border-rg-green focus:ring focus:ring-rg-green focus:ring-opacity-50"
        checked={checked}
        onChange={toggleItem}
      />
      <li>{name}</li>
    </div>
  );
};

export default TeamsDropdownItem;
