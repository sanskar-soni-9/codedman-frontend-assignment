import React from "react";
import EditProfileMenu from "../../components/EditProfileMenu";

interface EditLayoutProps {
  children: React.ReactNode;
}

const EditLayout: React.FC<EditLayoutProps> = ({ children }) => {
  return (
    <div className="flex mt-16 gap-20">
      <div className="">
        <EditProfileMenu />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default EditLayout;
