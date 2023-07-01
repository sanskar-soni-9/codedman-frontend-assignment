import React from "react";

interface CustomInputProps {
  name: string;
  type: string
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
  extraText?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  placeholder,
  value,
  extraText,
  handleChange,
}) => {
  return (
    <label>
      <p className="font-semibold mb-1">{name}</p>
      <input
        type={type}
        className="border w-full px-3 py-3.5 outline-0 rounded-lg border-zinc-200 focus:border-zinc-400"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      {extraText && <p className="text-zinc-500 mt-0.5">{extraText}</p>}
    </label>
  );
};

export default CustomInput;
