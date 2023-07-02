"use client";
import React from "react";
import {
  updateUserProfile,
  resetProfileData,
  selectUserData,
} from "@/redux/userData";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";
import CustomInput from "@/app/components/input/CustomInput";
import CustomTextarea from "@/app/components/input/CustomTextarea";
import CustomInputDropdown from "@/app/components/input/CustomInputDropdown";
import CustomPrimaryCheckBox from "@/app/components/input/CustomPrimaryCheckbox";

const Page: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  const profileData = currentState.profile;
  const dispatch = useAppDispatch();

  const profileImageLoader = () => profileData.imageUrl;

  const handleProfileChange = (type: string, value: string | boolean) => {
    dispatch(updateUserProfile({ type, value }));
  };

  const resetForm = (): void => {
    dispatch(resetProfileData());
  };

  const applyChanges = (): void => {
    localStorage.setItem("userData", JSON.stringify(currentState));
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
          value={profileData.name}
          handleChange={(value) => handleProfileChange("name", value)}
          extraText="Name entered above will be used for all issued certificates"
        />
        <CustomTextarea
          name="About"
          value={profileData.about}
          handleChange={(value) => handleProfileChange("about", value)}
        />
        <CustomInput
          name="About"
          type="date"
          placeholder="DD/MM/YY"
          value={profileData.dob}
          handleChange={(value) => handleProfileChange("dob", value)}
        />
        <CustomInputDropdown
          name="Gender"
          value={profileData.gender}
          placeholder="What is your gender"
          handleChange={(value) => handleProfileChange("gender", value)}
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
              isOn={profileData.privacy.followers}
              handleChange={(value) => handleProfileChange("followers", value)}
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
              isOn={profileData.privacy.xp}
              handleChange={(value) => handleProfileChange("xp", value)}
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
              isOn={profileData.privacy.achievementBadges}
              handleChange={(value) => handleProfileChange("badges", value)}
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
