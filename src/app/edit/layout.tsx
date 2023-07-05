import React from "react";
import EditProfileMenu from "../components/EditProfileMenu";

interface EditLayoutProps {
  children: React.ReactNode;
}

const EditLayout: React.FC<EditLayoutProps> = ({ children }) => {
  return (
    <div className="flex mt-16 gap-10">
      <div className="hidden lg:block">
        <EditProfileMenu />
      </div>
      <div className="grow w-4/5"><main className="w-full xl:w-8/12 mx-auto">{children}</main></div>
    </div>
  );
};

export default EditLayout;
