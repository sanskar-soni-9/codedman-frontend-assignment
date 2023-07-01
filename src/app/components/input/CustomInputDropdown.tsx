import React, { useState } from "react";
import Image from "next/image";

interface CustomInputDropdownProps {
  name: string;
  placeholder: string;
  value: string;
  list: string[];
  handleChange: (value: string) => void;
  extraText?: string;
}

const CustomInputDropdown: React.FC<CustomInputDropdownProps> = ({
  name,
  placeholder,
  value,
  list,
  handleChange,
  extraText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectedValueChange = (value: string) => {
    toggleIsOpen();
    handleChange(value);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="absolute z-40 top-0 right-0 left-0 bottom-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <label className="relative">
        <p className="font-semibold mb-1">{name}</p>
        <div
          className={`flex w-full border border-zinc-200 px-3 py-3.5 rounded-t-lg cursor-pointer ${
            !isOpen && "rounded-b-lg"
          }`}
          onClick={toggleIsOpen}
        >
          <input
            type="text"
            className="outline-0 w-full bg-inherit cursor-pointer"
            placeholder={placeholder}
            value={value}
            disabled={true}
          />
          <Image
            src="/arrow-down.svg"
            alt="arrow down icon"
            width={20}
            height={20}
          />
        </div>
        {isOpen && (
          <ul className="absolute z-50 shadom-md bg-white w-full border-b border-x rounded-b-lg">
            {list.map((item) => {
              return (
                <div
                  className="px-3 py-1.5 hover:bg-zinc-50 cursor-pointer border-b last:rounded-b-lg last:border-b-0"
                  onClick={() => handleSelectedValueChange(item)}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </ul>
        )}
      </label>
      {extraText && <p className="text-zinc-500 mt-0.5">{extraText}</p>}
    </div>
  );
};

export default CustomInputDropdown;
