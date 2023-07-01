"use client";
import React, { useState } from "react";
import { selectSocials, updateUserSocials } from "@/redux/userData";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import CustomInput from "@/app/components/input/CustomInput";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";

import type { UserSocials } from "../../../../../user";

const Page: React.FC = () => {
  const socialsData = useAppSelector(selectSocials);
  const dispatch = useAppDispatch();

  const [githubURL, setGithubURL] = useState(socialsData.github);
  const [linkedInURL, setLinkedInURL] = useState(socialsData.linkedin);
  const [facebookURL, setFacebookURL] = useState(socialsData.facebook);
  const [instagramURL, setInstagramURL] = useState(socialsData.instagram);
  const [dribbbleURL, setDribbbleURL] = useState(socialsData.dribbble);
  const [behanceURL, setBehanceURL] = useState(socialsData.behance);

  const handleGithubURL = (value: string): void => {
    setGithubURL(value);
  };
  const handleLinkedInURL = (value: string) => {
    setLinkedInURL(value);
  };
  const handleFacebookURL = (value: string) => {
    setFacebookURL(value);
  };
  const handleInstagramURL = (value: string) => {
    setInstagramURL(value);
  };
  const handleDribbbleURL = (value: string) => {
    setDribbbleURL(value);
  };
  const handleBehanceURL = (value: string) => {
    setBehanceURL(value);
  };

  const resetForm = (): void => {
    setGithubURL(socialsData.github);
    setLinkedInURL(socialsData.linkedin);
    setFacebookURL(socialsData.facebook);
    setInstagramURL(socialsData.instagram);
    setDribbbleURL(socialsData.dribbble);
    setBehanceURL(socialsData.behance);
  };

  const applyChanges = (): void => {
    const data: UserSocials = {
      github: githubURL,
      linkedin: linkedInURL,
      facebook: facebookURL,
      instagram: instagramURL,
      dribbble: dribbbleURL,
      behance: behanceURL,
    };
    dispatch(updateUserSocials(data));
  };

  return (
    <div className="w-3/4 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CustomInput
          name="GitHub"
          type="text"
          placeholder="Github profile URL"
          value={githubURL}
          handleChange={handleGithubURL}
        />
        <CustomInput
          name="LinkedIn"
          type="text"
          placeholder="LinkedIn profile URL"
          value={linkedInURL}
          handleChange={handleLinkedInURL}
        />
        <CustomInput
          name="Facebook"
          type="text"
          placeholder="Facebook profile URL"
          value={facebookURL}
          handleChange={handleFacebookURL}
        />
        <CustomInput
          name="Instagram"
          type="text"
          placeholder="Instagram profile URL"
          value={instagramURL}
          handleChange={handleInstagramURL}
        />
        <CustomInput
          name="Dribbble"
          type="text"
          placeholder="Dribbble profile URL"
          value={dribbbleURL}
          handleChange={handleDribbbleURL}
        />
        <CustomInput
          name="Behance"
          type="text"
          placeholder="Behance profile URL"
          value={behanceURL}
          handleChange={handleBehanceURL}
        />
      </div>
      <div className="flex justify-end gap-3">
        <SecondaryBtn handleClick={resetForm}>Cancel</SecondaryBtn>
        <PrimaryBtn handleClick={applyChanges}>Save changes</PrimaryBtn>
      </div>
    </div>
  );
};

export default Page;
