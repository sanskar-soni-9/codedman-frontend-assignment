import React from "react";

interface PrimaryBtnProps {
  children: string | number;
  handleClick?: () => void;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ children, handleClick }) => {
  if (handleClick) {
    return (
      <button
        className="px-4 py-2 bg-primary-600 rounded-lg text-white text-sm font-semibold"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button className="px-4 py-2 bg-primary-600 rounded-lg text-white text-sm font-semibold">
        {children}
      </button>
    );
  }
};

export default PrimaryBtn;
