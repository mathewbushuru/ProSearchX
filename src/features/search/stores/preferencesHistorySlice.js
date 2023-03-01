import { createSlice } from "@reduxjs/toolkit";

export const preferencesHistorySlice = createSlice({
  name: "preferencesHistory",
  initialState: {
    saveOptions: true,
    previousPreferencesHistory: [],
  },
  reducers: {
    toggleSaveOptionsAction: (state) => {
      state.saveOptions = !state.saveOptions;
    },
    saveOptionsOnAction: (state) => {
      state.saveOptions = true;
    },
    saveOptionsOffAction: (state) => {
      state.saveOptions = false;
    },
  },
});

export const {
  toggleSaveOptionsAction,
  saveOptionsOnAction,
  saveOptionsOffAction,
} = preferencesHistorySlice.actions;

const preferencesHistoryReducer = preferencesHistorySlice.reducer;

export default preferencesHistoryReducer;
