import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { UserProfile, UserSocials } from "../../user";
import userData from "../../user";

const initialState = userData;

interface UpdateUserPortfolio {
  playgrounds: number[];
  projects: number[];
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    updateUserSocials: (state, action: PayloadAction<UserSocials>) => {
      state.socials = action.payload;
    },
    updateUserPortfolio: (
      state,
      action: PayloadAction<UpdateUserPortfolio>
    ) => {
      state.portfolio.playgrounds.map((oldPlayground) => {
        action.payload.playgrounds.map((newPlayground) => {
          if (oldPlayground.id === newPlayground) {
            oldPlayground.show = true;
          } else {
            oldPlayground.show = false;
          }
        });
      });

      state.portfolio.projects.map((oldProject) => {
        action.payload.projects.map((newProject) => {
          if (oldProject.id === newProject) {
            oldProject.show = true;
          } else {
            oldProject.show = false;
          }
        });
      });
    },
  },
});

export const { updateUserProfile, updateUserSocials, updateUserPortfolio } = userDataSlice.actions;

export const selectProfile = (state: RootState) => state.userData.profile;
export const selectSocials = (state: RootState) => state.userData.socials;
export const selectPortfolio = (state: RootState) => state.userData.portfolio;
export const selectResume = (state: RootState) => state.userData.resume;
export const selectImgaeUrl = (state: RootState) => state.userData.profile.imageUrl;
export const selectLevel = (state: RootState) => state.userData.level;
export const selectNotifications = (state: RootState) => state.userData.notifications;

export default userDataSlice.reducer;
