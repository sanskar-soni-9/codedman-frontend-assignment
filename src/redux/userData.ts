import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../user";
import { RootState } from "./store";
import apiData from "../../user";

let storageData = apiData;
if (typeof localStorage !== "undefined" && localStorage.getItem("userData"))
  storageData = JSON.parse(localStorage.getItem("userData") ?? "");

let initialState: UserData = storageData;

export const updateInitState = (state: UserData) => {
  initialState = state;
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserProfile: (
      state,
      action: PayloadAction<{ type: string; value: string | boolean }>,
    ) => {
      if (typeof action.payload.value === "string") {
        switch (action.payload.type) {
          case "name": {
            state.profile.name = action.payload.value;
            return;
          }
          case "about": {
            state.profile.about = action.payload.value;
            return;
          }
          case "dob": {
            state.profile.dob = action.payload.value;
            return;
          }
          case "gender": {
            state.profile.gender = action.payload.value;
            return;
          }
          case "job": {
            state.profile.job = action.payload.value;
            if (action.payload.value) state.profile.lookingForJob = false;
            return;
          }
          case "graduation": {
            state.profile.graduation = action.payload.value;
            return;
          }
          case "location": {
            state.profile.location = action.payload.value;
            return;
          }
          default: {
            console.error("Invalid input");
          }
        }
      } else if (typeof action.payload.value === "boolean") {
        switch (action.payload.type) {
          case "followers": {
            state.profile.privacy.followers = action.payload.value;
            return;
          }
          case "xp": {
            state.profile.privacy.xp = action.payload.value;
            return;
          }
          case "badges": {
            state.profile.privacy.achievementBadges = action.payload.value;
            return;
          }
          case "jobStatus": {
            state.profile.isEmployed = action.payload.value;
            return;
          }
          case "lookingForJob": {
            state.profile.lookingForJob = action.payload.value;
            if (action.payload.value) state.profile.job = "";
            return;
          }
          default: {
            console.error("Invalid profile type");
          }
        }
      } else {
        console.error("invalid type");
      }
    },
    resetProfileData: (state) => {
      state.profile = initialState.profile;
    },
    updateUserSocials: (
      state,
      action: PayloadAction<{ type: string; value: string }>,
    ) => {
      state.socials.map((social) => {
        if (social.type === action.payload.type)
          social.value = action.payload.value;
      });
    },
    resetSocialsData: (state) => {
      state.socials = initialState.socials;
    },
    updateUserPortfolio: (
      state,
      action: PayloadAction<{ type: string; id: number }>,
    ) => {
      switch (action.payload.type) {
        case "playground": {
          state.portfolio.playgrounds.map((playground) => {
            if (playground.id === action.payload.id)
              playground.show = !playground.show;
          });
          return;
        }
        case "project": {
          state.portfolio.projects.map((project) => {
            if (project.id === action.payload.id) project.show = !project.show;
          });
          return;
        }
        case "certificate": {
          state.portfolio.certificates.map((certificate) => {
            if (certificate.id === action.payload.id)
              certificate.show = !certificate.show;
          });
          return;
        }
        default: {
          console.error("Invalid portfolio type.");
        }
      }
    },
    resetPortfolioData: (state) => {
      state.portfolio = initialState.portfolio;
    },
    updateUserResume: (
      state,
      action: PayloadAction<{ type: string; value: string | number }>,
    ) => {
      if (typeof action.payload.value === "string") {
        switch (action.payload.type) {
          case "techSkills": {
            state.resume.techSkills.map((tech) => {
              if (tech.title === action.payload.value) tech.show = !tech.show;
            });
            return;
          }
          case "interestPush": {
            if (
              state.resume.interests.find(
                (value) => value !== action.payload.value,
              )
            )
              state.resume.interests.push(action.payload.value);
            return;
          }
          default: {
            console.error("Invalid input");
          }
        }
      } else if (typeof action.payload.value === "number") {
        switch (action.payload.type) {
          case "interestPop": {
            state.resume.interests.splice(action.payload.value, 1);
            return;
          }
          default: {
            console.error("invalid type");
          }
        }
      } else {
        console.error("invalid type");
      }
    },
    resetResumeData: (state) => {
      state.resume = initialState.resume;
    },
  },
});

export const {
  updateUserProfile,
  resetProfileData,
  updateUserSocials,
  resetSocialsData,
  updateUserPortfolio,
  resetPortfolioData,
  updateUserResume,
  resetResumeData,
} = userDataSlice.actions;

export const selectUserData = (state: RootState) => state.userData;

export default userDataSlice.reducer;
