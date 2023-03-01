import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "features/search/stores/counterSlice";
import preferencesHistoryReducer from "features/search/stores/preferencesHistorySlice";
import uiReducer from "features/search/stores/uiSlice";
import queryReducer from "features/search/stores/querySlice";

const globalStore = configureStore({
  reducer: {
    counter: counterReducer,
    preferencesHistory: preferencesHistoryReducer,
    ui: uiReducer,
    query: queryReducer,
  },
});

export default globalStore;

/*
1. create a redux store `src/stores/redux/` using configureStore from rtk which accepts a reducer as a named argument
2. Provide redux store to all react components at `src/providers/` using a Provider component from react-redux
3. Pass the redux store to the provider using the store prop
4. Use React-redux useSelector/useDispatch hooks in react components
5. Read data from store with useSelector and dispatch actions as needed with useDispatch hook
*/
