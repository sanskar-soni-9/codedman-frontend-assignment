import React from "react";

interface CustomInputProps {
  name?: string;
  type: string;
  placeholder: string;
  value: string | undefined;
  handleChange: (value: string) => void;
  extraText?: string;
  oneline?: boolean;
  handleSubmit?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  oneline,
  placeholder,
  value,
  extraText,
  handleChange,
  handleSubmit,
}) => {
  return (
    <label className={oneline ? "flex gap-3 items-center" : ""}>
      {name ? <p className="font-semibold mb-1">{name}</p> : ""}
      <input
        type={type}
        className="border w-full px-3 py-3.5 outline-0 rounded-lg border-zinc-200 focus:border-zinc-400"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit && handleSubmit();
        }}
      />
      {extraText && <p className="text-zinc-500 mt-0.5">{extraText}</p>}
    </label>
  );
};

export default CustomInput;
