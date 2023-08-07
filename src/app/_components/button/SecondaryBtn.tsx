import React from "react";

interface SecondaryBtnProps {
  children: string | number;
  handleClick?: () => void;
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  children,
  handleClick,
}) => {
  if (handleClick) {
    return (
      <button
        className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-semibold"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-semibold">
        {children}
      </button>
    );
  }
};

export default SecondaryBtn;
