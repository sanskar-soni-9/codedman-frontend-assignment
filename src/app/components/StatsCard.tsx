import React from "react";
import Image from "next/image";

interface StatsCardProps {
  src: string;
  name: string;
  value: string | number;
  para: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ src, name, value, para }) => {
  return (
    <div className="flex gap-4 py-3 px-5 rounded-xl border border-zinc-100 bg-zinc-50 items-center">
      <Image
        src={src}
        alt={`${name} icon`}
        className="translate-y-2"
        width={64}
        height={64}
      />
      <div>
        <h2 className="text-xl font-bold">{value}</h2>
        <p className="text-base font-normal text-zinc-500">{para}</p>
      </div>
    </div>
  );
};

export default StatsCard;
