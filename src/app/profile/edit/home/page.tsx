"use client";
import React, { useState } from "react";
import { selectProfile, updateUserProfile } from "@/redux/userData";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";
import CustomInput from "@/app/components/input/CustomInput";
import CustomTextarea from "@/app/components/input/CustomTextarea";
import CustomInputDropdown from "@/app/components/input/CustomInputDropdown";
import CustomPrimaryCheckBox from "@/app/components/input/CustomPrimaryCheckbox";

import type { UserProfile } from "../../../../../user";

const Page: React.FC = () => {
  const profileData = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const [displayName, setDisplayName] = useState(profileData.name);
  const [about, setAbout] = useState(profileData.about);
  const [dob, setDob] = useState(profileData.dob);
  const [gender, setGender] = useState(profileData.gender);
  const [allowFollowers, setAllowFollowers] = useState(
    profileData.privacy.followers
  );
  const [allowXP, setAllowXP] = useState(profileData.privacy.xp);
  const [allowBadges, setAllowBadges] = useState(
    profileData.privacy.achievementBadges
  );

  const profileImageLoader = () => profileData.imageUrl;

  const handleNameChange = (value: string): void => {
    setDisplayName(value);
  };
  const handleAboutChange = (value: string): void => {
    setAbout(value);
  };
  const handleDateChange = (value: string): void => {
    setDob(value);
  };
  const handleGenderChange = (value: string): void => {
    setGender(value);
  };
  const toggleAllowFollowers = (): void => {
    setAllowFollowers(!allowFollowers);
  };
  const toggleAllowXP = (): void => {
    setAllowXP(!allowXP);
  };
  const toggleAllowBadges = (): void => {
    setAllowBadges(!allowBadges);
  };

  const resetForm = (): void => {
    setDisplayName(profileData.name);
    setAbout(profileData.about);
    setDob(profileData.dob);
    setGender(profileData.gender);
    setAllowFollowers(profileData.privacy.followers);
    setAllowXP(profileData.privacy.xp);
    setAllowBadges(profileData.privacy.achievementBadges);
  };

  const applyChanges = (): void => {
    const data: UserProfile = {
      name: displayName,
      imageUrl: profileData.imageUrl,
      about,
      dob,
      gender,
      privacy: {
        followers: allowFollowers,
        xp: allowXP,
        achievementBadges: allowBadges,
      },
      profession: profileData.profession,
    };
    dispatch(updateUserProfile(data));
  };

  return (
    <div className="flex flex-col gap-10 text-zinc-900 text-sm w-9/12">
      <div className="flex gap-6">
        <Image
          loader={profileImageLoader}
          src={profileData.imageUrl}
          alt="user profile photo"
          width={72}
          height={72}
          unoptimized={true}
          priority={true}
          className="rounded-full"
        />
        <div className="flex gap-3 items-center">
          <PrimaryBtn>Upload new picture</PrimaryBtn>
          <SecondaryBtn>Delete</SecondaryBtn>
        </div>
      </div>
      <form className="flex flex-col gap-6">
        <CustomInput
          name="Display name"
          type="text"
          placeholder="Full Name"
          value={displayName}
          handleChange={handleNameChange}
          extraText="Name entered above will be used for all issued certificates"
        />
        <CustomTextarea
          name="About"
          value={about}
          handleChange={handleAboutChange}
        />
        <CustomInput
          name="About"
          type="date"
          placeholder="DD/MM/YY"
          value={dob}
          handleChange={handleDateChange}
        />
        <CustomInputDropdown
          name="Gender"
          value={gender}
          placeholder="What is your gender"
          handleChange={handleGenderChange}
          list={["Male", "Female", "Other"]}
        />
      </form>
      <div>
        <div className="mb-6">
          <h1 className="text-xl font-bold">Section visibility</h1>
          <p className="text-base text-zinc-500 font-normal">
            Select which sections and content should show on your profile page.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-50 p-6 rounded-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold">Followers and following</h2>
              <p className="text-zinc-500 text-sm font-normal">
                Shows your followers and the users you follow on codedamn
              </p>
            </div>
            <CustomPrimaryCheckBox
              isOn={allowFollowers}
              handleChange={toggleAllowFollowers}
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold">XP</h2>
              <p className="text-zinc-500 text-sm font-normal">
                Shows the XP you have earned
              </p>
            </div>
            <CustomPrimaryCheckBox
              isOn={allowXP}
              handleChange={toggleAllowXP}
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold">Achievement badges</h2>
              <p className="text-zinc-500 text-sm font-normal">
                Shows your relative percentile and proficiency
              </p>
            </div>
            <CustomPrimaryCheckBox
              isOn={allowBadges}
              handleChange={toggleAllowBadges}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <SecondaryBtn handleClick={resetForm}>Cancel</SecondaryBtn>
        <PrimaryBtn handleClick={applyChanges}>Save changes</PrimaryBtn>
      </div>
    </div>
  );
};

export default Page;
