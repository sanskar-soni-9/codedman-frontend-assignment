import React from "react";
import EditProfileMenu from "../components/EditProfileMenu";
import EditProfileDropdown from "../components/EditProfileDropdown";

interface EditLayoutProps {
  children: React.ReactNode;
}

const EditProfileMenuList = [
  { id: "profile", title: "Profile", link: "/edit/profile" },
  { id: "socials", title: "Socials", link: "/edit/socials" },
  { id: "portfolio", title: "Portfolio", link: "/edit/portfolio" },
  { id: "resume", title: "Resume", link: "/edit/resume" },
];

const EditLayout: React.FC<EditLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row mt-16 gap-10">
      <div className="hidden lg:block">
        <EditProfileMenu navList={EditProfileMenuList} />
      </div>
      <div className="lg:hidden w-full">
        <EditProfileDropdown navList={EditProfileMenuList} />
      </div>
      <div className="grow w-full">
        <main className="w-full xl:w-8/12 mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default EditLayout;
