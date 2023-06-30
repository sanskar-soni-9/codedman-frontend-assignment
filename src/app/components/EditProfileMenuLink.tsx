import React from "react";
import Link from "next/link";

import ChromeIcon from "./ChromeIcon";

interface EditProfileMenuLinkProps {
  id: string;
  title: string;
  link: string;
  isActive: boolean;
  handleActiveLinkChange: React.Dispatch<React.SetStateAction<string>>
}

const EditProfileMenuLink: React.FC<EditProfileMenuLinkProps> = ({
  id,
  title,
  link,
  isActive,
  handleActiveLinkChange,
}) => {
  return (
    <Link href={link} className="group flex gap-5 mb-3 items-center" onClick={() => handleActiveLinkChange(id)}>
      <div
        className={`rounded-e-lg w-[5px] h-9 group-hover:bg-zinc-900 ${
          isActive ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      />
      <div
        className={`flex gap-2 py-3 w-52 font-semibold text-lg items-center group-hover:text-zinc-900 ${
          isActive ? "text-zinc-900" : "text-zinc-400"
        }`}
      >
        <ChromeIcon isActive={isActive} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default EditProfileMenuLink;
