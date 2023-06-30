"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";

const options = ["Courses", "Videos", "Roadmaps"];

interface HeaderProps {
  notifications?: number;
  imageUrl: string;
  level: number;
}

export const Header: React.FC<HeaderProps> = ({
  notifications,
  imageUrl,
  level,
}) => {
  const [isProfileMenu, setIsProfileMenu] = useState(false);

  return (
    <>
      {isProfileMenu && (
        <div className="absolute top-0 right-0 left-0 bottom-0 z-40" onClick={() => setIsProfileMenu(!isProfileMenu)}></div>
      )}
      <nav className="flex justify-between items-center gap-3">
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
              <Image
                src="/bell.svg"
                className="cursor-pointer"
                alt="bell icaon"
                width={24}
                height={24}
              />
              {notifications && (
                <span className="absolute -top-2 -right-1 bg-accent rounded-full bg-rose-500 text-white text-xs w-4 h-4 text-center">
                  {notifications}
                </span>
              )}
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => setIsProfileMenu(!isProfileMenu)}
            >
              <>
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
                <span className="absolute text-white font-bold text-sm -top-1 right-0">
                  {level}
                </span>
              </>
              {isProfileMenu && (
                <div className="absolute z-50 -left-9 w-28 text-sm border bg-white shadow-md">
                  <div className="px-3 py-2 w-full hover:bg-gray-100 text-zinc-800 font-medium">
                    <Link href="/profile/edit">Edit Profile</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
