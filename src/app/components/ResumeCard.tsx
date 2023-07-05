import React from "react";
import Image from "next/image";

interface ResumeCardProps {
  icon: string;
  title: string;
  location: string;
  company?: string;
  degree?: string;
  duration: { from: string; to: string };
  description: string;
  responsibilities: string[];
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  icon,
  title,
  location,
  company,
  degree,
  duration,
  description,
  responsibilities,
}) => {
  return (
    <div className="flex gap-4 items-start p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
      <Image
        src={`/${icon}.svg`}
        alt={`${icon} icon`}
        width={40}
        height={40}
        className="w-12 h-12"
      />
      <div className="w-full">
        <h1 className="text-xl font-semibold mb-0.5">{title}</h1>
        <div className="flex justify-between items-center text-base mb-6">
          <p className="font-normal">{`${location} ${
            location && (degree || company) ? "·" : ""
          } ${company || degree || ""}`}</p>
          <strong className="font-semibold">{`${duration.from} - ${duration.to}`}</strong>
        </div>
        {description && (
          <p className="text-base font-normal text-zinc-500">{description}</p>
        )}
        {responsibilities.length ? (
          <div className="mt-5">
            <h2 className="text-base font-semibold mb-2">
              Job responsibilities:
            </h2>
            <ul role="list">
              {responsibilities.map((responsibility) => {
                return (
                  <li
                    key={responsibility}
                    className="flex gap-2 text-base font-normal text-zinc-500 mb-1"
                  >
                    <Image
                      src="/marker.svg"
                      alt="list marker"
                      width={11}
                      height={25}
                    />
                    <p>{responsibility}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ResumeCard;
