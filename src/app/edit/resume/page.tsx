"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  selectUserData,
  updateUserProfile,
  resetProfileData,
  resetResumeData,
} from "@/redux/userData";
import CustomInput from "@/app/components/input/CustomInput";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";

const Page: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const [interestPushValue, setInterestPushValue] = useState("");

  const handleProfileChange = (
    type: string,
    value: boolean | string | number
  ) => {
    dispatch(updateUserProfile({ type, value }));
  };

  const resetForm = useCallback(() => {
    dispatch(resetProfileData());
    dispatch(resetResumeData());
  }, [dispatch]);

  const applyChanges = (): void => {
    localStorage.setItem("userData", JSON.stringify(currentState));
  };

  useEffect(() => resetForm, [resetForm]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 items-center">
        <h1 className="text-base font-semibold">Currently:</h1>
        <div className="cursor-pointer flex rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-medium">
          <span
            className={`px-3 py-2 border-r border-zinc-200 ${
              currentState.profile.isEmployed
                ? "text-indigo-600 bg-indigo-50"
                : "bg-zinc-50"
            }`}
            onClick={() => handleProfileChange("jobStatus", true)}
          >
            Employed
          </span>
          <span
            className={`px-3 py-2 border-l ${
              !currentState.profile.isEmployed
                ? "text-indigo-600 bg-indigo-50"
                : "bg-zinc-50"
            }`}
            onClick={() => handleProfileChange("jobStatus", false)}
          >
            Un-Employed
          </span>
        </div>
      </div>
      {currentState.profile.isEmployed ? (
        <CustomInput
          name="Job:"
          oneline={true}
          type="text"
          placeholder="Full stack developer at codedamn"
          value={currentState.profile.job}
          handleChange={(value) => handleProfileChange("job", value)}
        />
      ) : (
        <div className="flex gap-3 items-center">
          <h1 className="text-base font-semibold">Looking for job:</h1>
          <div className="w-fit cursor-pointer flex rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-medium">
            <span
              className={`px-3 py-2 border-r border-zinc-200 ${
                currentState.profile.lookingForJob
                  ? "text-indigo-600 bg-indigo-50"
                  : "bg-zinc-50"
              }`}
              onClick={() => handleProfileChange("lookingForJob", true)}
            >
              Yes
            </span>
            <span
              className={`px-3 py-2 border-l ${
                !currentState.profile.lookingForJob
                  ? "text-indigo-600 bg-indigo-50"
                  : "bg-zinc-50"
              }`}
              onClick={() => handleProfileChange("lookingForJob", false)}
            >
              No
            </span>
          </div>
        </div>
      )}
      <CustomInput
        name="Graduation:"
        oneline={true}
        value={currentState.profile.graduation}
        type="text"
        placeholder="Harvard'22"
        handleChange={(value) => handleProfileChange("graduation", value)}
      />
      <CustomInput
        name="Location:"
        oneline={true}
        value={currentState.profile.location}
        type="text"
        placeholder="Mumbai, India"
        handleChange={(value) => handleProfileChange("location", value)}
      />
      <div className="">
        <h1 className="text-base font-semibold mb-2.5">Tech Skills:</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {currentState.resume.techSkills.map((tech) => {
            return (
              <div
                key={tech.title}
                className={`cursor-pointer flex justify-between items-center rounded-lg px-4 py-3 ${
                  tech.show
                    ? "border-2 border-indigo-500 bg-indigo-50"
                    : "border border-zinc-200 bg-zinc-50"
                }`}
                onClick={() => handleProfileChange("techSkills", tech.title)}
              >
                <div className="flex gap-2">
                  <Image
                    src={`/${tech.icon}.svg`}
                    alt={`${tech.icon} icon`}
                    width={20}
                    height={20}
                  />
                  <p>{tech.title}</p>
                </div>
                <div
                  className={`rounded-full w-3.5 h-3.5 border ${
                    tech.show
                      ? "bg-indigo-600 border-indigo-600"
                      : "bg-white border-zinc-400"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-base font-semibold mb-2.5">Interests:</h1>
        <div className="flex flex-col gap-3">
          <CustomInput
            value={interestPushValue}
            type="text"
            placeholder="Add Interest/hobby"
            handleChange={(value) => setInterestPushValue(value)}
            handleSubmit={() => {
              handleProfileChange("interestPush", interestPushValue);
              setInterestPushValue("");
            }}
          />
          <ul className="flex flex-wrap gap-3">
            {currentState.resume.interests.map((interest, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-4 bg-zinc-50 px-3 py-2 rounded-lg text-sm font-normal border border-zinc-200"
                >
                  <p>{interest}</p>
                  <Image
                    src="/cross.svg"
                    alt="cross icon"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                    onClick={() => handleProfileChange("interestPop", index)}
                  />
                </li>
              );
            })}
          </ul>
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
