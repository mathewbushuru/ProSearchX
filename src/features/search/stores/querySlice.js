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
  },
});

export const { modifyQueryAction } = querySlice.actions;

const queryReducer = querySlice.reducer;

export default queryReducer;
