"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import EditProfileMenuLink from "./EditProfileMenuLink";

interface EditProfileMenuProps {
  navList: { id: string; title: string; link: string }[];
}

const EditProfileMenu: React.FC<EditProfileMenuProps> = ({ navList }) => {
  const path = usePathname().slice(6);
  const [activeMenuLink, setActiveMenuLink] = useState(path);

  useEffect(() => {
    setActiveMenuLink(path);
  }, [path]);

  return (
    <div className="bg-zinc-100 py-6 pr-6 rounded-2xl text-zinc-400">
      {navList.map(({ id, title, link }) => {
        return (
          <EditProfileMenuLink
            id={id}
            key={id}
            title={title}
            link={link}
            isActive={activeMenuLink === id}
            handleActiveLinkChange={setActiveMenuLink}
          />
        );
      })}
    </div>
  );
};

export default EditProfileMenu;
