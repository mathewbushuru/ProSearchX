import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    newTab: false,
  },
  reducers: {
    toggleNewTabAction: (state) => {
      state.newTab = !state.newTab;
    },
    newTabOnAction: (state) => {
      state.newTab = true;
    },
    newTabOffAction: (state) => {
      state.newTab = false;
    },
  },
});

export const { toggleNewTabAction, newTabOnAction, newTabOffAction } =
  settingsSlice.actions;

const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
