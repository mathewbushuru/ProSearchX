import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "features/search/stores/counterSlice";
import preferencesHistoryReducer from "features/search/stores/preferencesHistorySlice";
import uiReducer from "features/search/stores/uiSlice";
import queryReducer from "features/search/stores/querySlice";
import settingsReducer from "features/search/stores/settingsSlice";

const globalStore = configureStore({
  reducer: {
    counter: counterReducer,
    preferencesHistory: preferencesHistoryReducer,
    ui: uiReducer,
    query: queryReducer,
    settings: settingsReducer,
  },
});

export default globalStore;
