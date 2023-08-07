"use client";
import React, { useEffect, useCallback } from "react";
import {
  selectUserData,
  updateUserSocials,
  resetSocialsData,
  updateInitState,
} from "@/redux/userData";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import CustomInput from "@/app/components/input/CustomInput";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";

const Page: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  const socialsData = currentState.socials;
  const dispatch = useAppDispatch();

  const handleSocialsChange = (type: string, value: string) => {
    dispatch(updateUserSocials({ type, value }));
  };

  const resetForm = useCallback((): void => {
    dispatch(resetSocialsData());
  }, [dispatch]);

  const applyChanges = (): void => {
    localStorage.setItem("userData", JSON.stringify(currentState));
    updateInitState(currentState);
  };

  useEffect(() => {
    return resetForm;
  }, [resetForm]);

  return (
    <div className="flex flex-col gap-10 mb-12">
      <div className="flex flex-col gap-6">
        {socialsData.map((social) => {
          return (
            <CustomInput
              name={social.type}
              key={social.type}
              type="text"
              placeholder={`${social.type} profile URL`}
              value={social.value}
              handleChange={(value) => handleSocialsChange(social.type, value)}
            />
          );
        })}
      </div>
      <div className="flex justify-end gap-3">
        <SecondaryBtn handleClick={resetForm}>Cancel</SecondaryBtn>
        <PrimaryBtn handleClick={applyChanges}>Save changes</PrimaryBtn>
      </div>
    </div>
  );
};

export default Page;
