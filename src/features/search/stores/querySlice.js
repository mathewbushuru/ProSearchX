import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "query",
  initialState: {
    queryString: "",
    searchString: "",
  },
  reducers: {
    modifyQueryAction: (state, action) => {
      state.queryString = action.payload;
    },
    submitQueryAction: (state) => {
      console.log("Submitting query");
      state.searchString = state.queryString;
    },
  },
});

export const { modifyQueryAction, submitQueryAction } = querySlice.actions;

const queryReducer = querySlice.reducer;

export default queryReducer;
