"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import EditProfileMenuLink from "./EditProfileMenuLink";

const EditProfileMenuList = [
  { id: "profile", title: "Profile", link: "/edit/profile" },
  { id: "socials", title: "Socials", link: "/edit/socials" },
  { id: "portfolio", title: "Portfolio", link: "/edit/portfolio" },
  { id: "resume", title: "Resume", link: "/edit/resume" },
];

const EditProfileMenu: React.FC = () => {
  const path = usePathname().slice(6);
  const [activeMenuLink, setActiveMenuLink] = useState(path);

  useEffect(() => {
    setActiveMenuLink(path);
  }, [path]);

  return (
    <div className="bg-zinc-100 py-6 pr-6 rounded-2xl text-zinc-400">
      {EditProfileMenuList.map(({ id, title, link }) => {
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
