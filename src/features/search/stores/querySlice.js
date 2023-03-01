import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "query",
  initialState: {
    queryString: "",
  },
  reducers: {
    modifyQueryAction: (state, action) => {
      state.queryString = action.payload;
    },
    addWebsiteAction: (state, action) => {
      switch (action.payload) {
        case "reddit":
          state.queryString += " site:reddit.com";
          break;
        case "stackOverflow":
          state.queryString += " site:stackOverflow.com";
          break;
        case "twitter":
          state.queryString += " site:twitter.com";
          break;
      }
    },
  },
});

export const { modifyQueryAction, addWebsiteAction } = querySlice.actions;

const queryReducer = querySlice.reducer;

export default queryReducer;
