import { createSlice } from "@reduxjs/toolkit";

const defaultShownWebsites = {
  all: true,
  reddit: false,
  stackOverflow: false,
  twitter: false,
};
const defaultDatePublished = {
  anytime: true,
  pastYear: false,
  pastMonth: false,
  pastWeek: false,
};
const defaultFileFormat = {
  anyFormat: true,
  pdf: false,
  zip: false,
  pptx: false,
  docx: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    shownWebsites: defaultShownWebsites,
    datePublished: defaultDatePublished,
    fileFormat: defaultFileFormat,
    exactWords: "",
    similarWords: "",
    excludeWords: "",
  },
  reducers: {
    resetOptionsAction: (state) => {
      state.shownWebsites = defaultShownWebsites;
      state.datePublished = defaultDatePublished;
      state.fileFormat = defaultFileFormat;
      state.exactWords = "";
      state.similarWords = "";
      state.excludeWords = "";
    },
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
    changeExactWordsAction: (state, action) => {
      state.exactWords = action.payload;
    },
    changeSimilarWordsAction: (state, action) => {
      state.similarWords = action.payload;
    },
    changeExcludeWordsAction: (state, action) => {
      state.excludeWords = action.payload;
    },
  },
});

export const {
  resetOptionsAction,
  changeWebsiteAction,
  changeDateAction,
  changeFileAction,
  changeExactWordsAction,
  changeSimilarWordsAction,
  changeExcludeWordsAction,
} = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
