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
          state.shownWebsites.all = false;
          state.shownWebsites.reddit = true;
          break;
        }
        case "stackOverflow": {
          state.shownWebsites.all = false;
          state.shownWebsites.stackOverflow = true;
          break;
        }
        case "twitter": {
          state.shownWebsites.all = false;
          state.shownWebsites.twitter = true;
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

export const { changeWebsiteAction } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
