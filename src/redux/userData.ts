import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import apiData from "../../user";

let storageData = apiData;
if (typeof localStorage !== "undefined" && localStorage.getItem("userData")) {
  storageData = JSON.parse(localStorage.getItem("userData") ?? "");
}

const initialState = storageData;

interface UpdateUserPortfolio {
  playgrounds: number[];
  projects: number[];
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserProfile: (
      state,
      action: PayloadAction<{ type: string; value: string | boolean }>
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
          default: {
            console.log("Invalid input");
          }
        }
      } else {
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
          default: {
            console.error("Invalid profile type");
          }
        }
      }
    },
    resetProfileData: (state) => {
      state.profile = initialState.profile;
    },
    updateUserSocials: (
      state,
      action: PayloadAction<{ type: string; value: string }>
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
      action: PayloadAction<{ type: string; id: number }>
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
        default: {
          console.error("Invalid portfolio type.")
        }
      }
    },
  },
});

export const {
  updateUserProfile,
  resetProfileData,
  updateUserSocials,
  resetSocialsData,
  updateUserPortfolio,
} = userDataSlice.actions;

export const selectUserData = (state: RootState) => state.userData;
export const selectPortfolio = (state: RootState) => state.userData.portfolio;
export const selectResume = (state: RootState) => state.userData.resume;
export const selectImgaeUrl = (state: RootState) =>
  state.userData.profile.imageUrl;
export const selectLevel = (state: RootState) => state.userData.level;
export const selectNotifications = (state: RootState) =>
  state.userData.notifications;

export default userDataSlice.reducer;
