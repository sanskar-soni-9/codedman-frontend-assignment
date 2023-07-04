import React from "react";
import Image from "next/image";

interface CertificateCardProps {
  id: number;
  icon: string;
  title: string;
  issuedOn: string;
  isActive?: boolean;
  forDisplay: boolean;
  handleClick?: (id: number) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  icon,
  title,
  issuedOn,
  id,
  isActive,
  forDisplay,
  handleClick,
}) => {
  return (
    <div
      className={`relative p-5 rounded-lg ${forDisplay ? "" : "cursor-pointer"} ${
        isActive
          ? "border-2 bg-indigo-50 border-indigo-600"
          : "bg-zinc-50 border border-zinc-200"
      }`}
      onClick={() => handleClick && handleClick(id)}
    >
      <Image
        src={`/${icon}.svg`}
        alt={`${icon} icon`}
        width={40}
        height={40}
        className="mb-6"
      />
      <h2 className="text-base font-semibold mb-0.5">{title}</h2>
      <p className="text-sm font-normal text-zinc-500 mb-3">
        {`Issued on ${issuedOn}`}
      </p>
      <p className="text-sm font-semibold text-zinc-500 cursor-pointer">
        See credentials
      </p>
      {!forDisplay && (
        <div
          className={`absolute rounded-full w-4 h-4 top-4 right-4 flex justify-center items-center ${
            isActive ? "border-2 bg-indigo-600" : "border border-zinc-200 bg-white"
          }`}
        >
          <div className="rounded-full bg-white w-1.5 h-1.5" />
        </div>
      )}

    </div>
  );
};

export default CertificateCard;
