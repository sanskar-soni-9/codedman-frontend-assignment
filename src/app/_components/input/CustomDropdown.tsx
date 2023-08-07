"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CustomDropdownProps {
  options: string[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    options.length ? options[0] : ""
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="absolute z-40 top-0 left-0 right-0 bottom-0"
          onClick={toggleDropdown}
        ></div>
      )}
      <div className="relative">
        <div
          className="flex gap-1 bg-zinc-100 rounded-lg text-zinc-500 px-2 py-1 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span>{selectedValue || "Select an Option"}</span>
          <Image
            src="/arrow-down.svg"
            alt="arrow down logo"
            width={14}
            height={14}
          />
        </div>
        {isOpen && (
          <ul className="absolute z-50 bg-white rounded-lg shadow-md mt-2">
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;
