import React from "react";

interface CustomPrimaryCheckBoxProps {
  isOn: boolean;
  handleChange: (value: boolean) => void;
}

const CustomPrimaryCheckBox: React.FC<CustomPrimaryCheckBoxProps> = ({
  isOn,
  handleChange,
}) => {
  return (
    <div
      className={`rounded-full w-11 h-6 px-0.5 py-0.5 cursor-pointer duration-100 ${isOn ? "bg-indigo-600" : "bg-zinc-400" }`}
      onClick={() => handleChange(!isOn)}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full ${
          isOn && "translate-x-full"
        }`}
      />
    </div>
  );
};

export default CustomPrimaryCheckBox;
