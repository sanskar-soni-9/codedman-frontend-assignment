"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface EditProfileDropdownProps {
  navList: { id: string; title: string; link: string }[];
}

const EditProfileDropdown: React.FC<EditProfileDropdownProps> = ({
  navList,
}) => {
  const path = usePathname().slice(6);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <div className="relative w-fit">
      <div
        className={`flex gap-3 px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 w-fit text-md font-medium ${
          isOpen ? "rounded-b-none border-b-0" : ""
        }`}
      >
        <p>{`${path.slice(0, 1).toUpperCase() + path.slice(1)}`} </p>
        <Image
          src="/arrow-down.svg"
          alt="arrow-down icon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <ul className="absolute z-50 bg-zinc-50 w-full border rounded-b-lg">
          {navList.map((nav) => {
            if (nav.id !== path) {
              return (
                <Link href={nav.link} key={nav.id} className="group">
                  <li className="px-3 py-2 font-normal text-md">
                    {nav.title}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditProfileDropdown;
