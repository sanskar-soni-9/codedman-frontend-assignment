import React from "react";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";

const options = ["Courses", "Videos", "Roadmaps"];

interface HeaderProps {
  notifications?: number;
  imageUrl: string;
  level: number;
}

export const Header: React.FC<HeaderProps> = ({ notifications, imageUrl, level }) => {
  return (
    <nav className="flex justify-between mt-5 mx-10 items-center gap-3">
      <h1 className="font-bold text-2xl">codedamn</h1>
      <div className="flex items-center gap-6">
        <div className="hidden border border-zinc-100 px-3 py-2 rounded-xl md:flex">
          <Image
            src="/search.svg"
            alt="Search Logo"
            width={20}
            height={20}
            className="left-2 top-3 mr-2"
          />
          <input type="search" placeholder="Search" className="outline-0" />
          <CustomDropdown options={options} />
        </div>
        <div className="flex gap-4 items-center shrink-0">
          <div className="flex items-center px-3 py-2 gap-1">
            <Image src="/lightning.svg" alt="Logo" width={24} height={24} />
            <span className="text-base text-zinc-500 font-extrabold">2</span>
          </div>
          <div className="relative">
            <Image src="/bell.svg" alt="bell icaon" width={24} height={24} />
            {notifications && (
              <span className="absolute -top-2 -right-1 bg-accent rounded-full bg-rose-500 text-white text-xs w-4 h-4 text-center">
                {notifications}
              </span>
            )}
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt="profile image"
              className="rounded-full w-[42px] min-w-[-42px]"
            />
            <Image
              src="/polygon.svg"
              alt="user level indicator"
              width={50}
              height={50}
              className="absolute -top-4 right-[-17px] min-w-13 min-h-13"
            />
            <span className="absolute text-white font-bold text-sm -top-1 right-0">{level}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
