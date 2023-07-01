import React from "react";

interface CustomTextareaProps {
  name: string;
  value: string;
  handleChange: (value: string) => void;
  extraText?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  name,
  value,
  handleChange,
  extraText,
}) => {
  return (
    <label>
      <p className="font-semibold mb-1">{name}</p>
      <textarea
        className="outline-0 border border-zinc-200 rounded-lg w-full px-3 py-3.5 resize-none"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {extraText && <p className="text-zinc-500 mt-0.5">{extraText}</p>}
    </label>
  );
};

export default CustomTextarea;
