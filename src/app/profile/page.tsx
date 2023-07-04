import React from "react";
import { redirect } from "next/navigation";

const Page: React.FC = () => {
  redirect("/profile/portfolio");
};

export default Page;
