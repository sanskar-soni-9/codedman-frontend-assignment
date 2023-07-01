import React from "react";
import EditProfileMenu from "../../components/EditProfileMenu";

interface EditLayoutProps {
  children: React.ReactNode;
}

const EditLayout: React.FC<EditLayoutProps> = ({ children }) => {
  return (
    <div className="flex mt-16 gap-24">
      <div>
        <EditProfileMenu />
      </div>
      <main className="grow w-4/5">{children}</main>
    </div>
  );
};

export default EditLayout;
