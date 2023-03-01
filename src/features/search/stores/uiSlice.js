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
      if (action.payload) {
        switch (action.payload) {
          case "pastYear": {
            state.datePublished.anytime = false;
            state.datePublished.pastYear = true;
            state.datePublished.pastMonth = false;
            state.datePublished.pastWeek = false;
            break;
          }
          case "pastMonth": {
            state.datePublished.anytime = false;
            state.datePublished.pastYear = false;
            state.datePublished.pastMonth = true;
            state.datePublished.pastWeek = false;
            break;
          }
          case "pastWeek": {
            state.datePublished.anytime = false;
            state.datePublished.pastYear = false;
            state.datePublished.pastMonth = false;
            state.datePublished.pastWeek = true;
            break;
          }
          default: {
            state.datePublished.anytime = true;
            state.datePublished.pastYear = false;
            state.datePublished.pastMonth = false;
            state.datePublished.pastWeek = false;
          }
        }
      }
    },
    changeFileAction: (state, action) => {
      if (action.payload) {
        switch (action.payload) {
          case "pdf": {
            state.fileFormat.anyFormat = false;
            state.fileFormat.pdf = true;
            state.fileFormat.zip = false;
            state.fileFormat.pptx = false;
            state.fileFormat.docx = false;
            break;
          }
          case "zip": {
            state.fileFormat.anyFormat = false;
            state.fileFormat.pdf = false;
            state.fileFormat.zip = true;
            state.fileFormat.pptx = false;
            state.fileFormat.docx = false;
            break;
          }
          case "pptx": {
            state.fileFormat.anyFormat = false;
            state.fileFormat.pdf = false;
            state.fileFormat.zip = false;
            state.fileFormat.pptx = true;
            state.fileFormat.docx = false;
            break;
          }
          case "docx": {
            state.fileFormat.anyFormat = false;
            state.fileFormat.pdf = false;
            state.fileFormat.zip = false;
            state.fileFormat.pptx = false;
            state.fileFormat.docx = true;
            break;
          }
          default: {
            state.fileFormat.anyFormat = true;
            state.fileFormat.pdf = false;
            state.fileFormat.zip = false;
            state.fileFormat.pptx = false;
            state.fileFormat.docx = false;
          }
        }
      }
    },
  },
});

export const { changeWebsiteAction, changeDateAction, changeFileAction } =
  uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
