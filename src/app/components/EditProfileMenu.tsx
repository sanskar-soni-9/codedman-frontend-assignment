"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import EditProfileMenuLink from "./EditProfileMenuLink";

const EditProfileMenuList = [
  { id: "home", title: "Profile", link: "/profile/edit/home" },
  { id: "socials", title: "Socials", link: "/profile/edit/socials" },
  { id: "portfolio", title: "Portfolio", link: "/profile/edit/portfolio" },
  { id: "resume", title: "Resume", link: "/profile/edit/resume" },
];

const EditProfileMenu: React.FC = () => {
  const path = usePathname().slice(14);
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
