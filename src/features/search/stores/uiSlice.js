import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    shownWebsites: {
      all: true,
      reddit: false,
      stackOverflow: false,
      twitter: false,
    },
    datePublished: {
      anytime: true,
      pastYear: false,
      pastMonth: false,
      pastWeek: false,
    },
    fileFormat: {
      anyFormat: true,
      pdf: false,
      zip: false,
      pptx: false,
      docx: false,
    },
    exactWords: "",
    similarWords: "",
    excludeWords: "",
  },
  reducers: {
    changeWebsiteAction: (state, action) => {
      switch (action.payload) {
        case "reddit": {
          state.shownWebsites.reddit = !state.shownWebsites.reddit;
          state.shownWebsites.all =
            (state.shownWebsites.reddit === false &&
              state.shownWebsites.stackOverflow === false &&
              state.shownWebsites.twitter === false) ||
            false;
          break;
        }
        case "stackOverflow": {
          state.shownWebsites.stackOverflow =
            !state.shownWebsites.stackOverflow;
          state.shownWebsites.all =
            (state.shownWebsites.reddit === false &&
              state.shownWebsites.stackOverflow === false &&
              state.shownWebsites.twitter === false) ||
            false;
          break;
        }
        case "twitter": {
          state.shownWebsites.twitter = !state.shownWebsites.twitter;
          state.shownWebsites.all =
            (state.shownWebsites.reddit === false &&
              state.shownWebsites.stackOverflow === false &&
              state.shownWebsites.twitter === false) ||
            false;
          break;
        }
        default: {
          state.shownWebsites.all = true;
          state.shownWebsites.reddit = false;
          state.shownWebsites.stackOverflow = false;
          state.shownWebsites.twitter = false;
        }
      }
    },
    changeDateAction: (state, action) => {
      switch (action.payload) {
        case "reddit": {
          state.shownWebsites.all = false;
          state.shownWebsites.reddit = true;
          break;
        }
        default: {
          state.shownWebsites.all = true;
          state.shownWebsites.reddit = false;
          state.shownWebsites.stackOverflow = false;
          state.shownWebsites.twitter = false;
        }
      }
    },
  },
});

export const { changeWebsiteAction, changeDateAction } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
