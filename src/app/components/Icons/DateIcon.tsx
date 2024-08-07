// src/components/DateIcon.tsx
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface DateIconProps {
  date: Date;
}

const DateIcon: React.FC<DateIconProps> = ({ date }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  return (
    <div className="flex items-center space-x-2">
      {/* Icon */}
      <div className="text-rg-green">
        <FaCalendarAlt />
      </div>
      {/* text */}
      <div className="text-rg-green">
        <div className="text-xl font-bold">{day}</div>
        <div className="text-sm">{month}</div>
      </div>
    </div>
  );
};

export default DateIcon;
