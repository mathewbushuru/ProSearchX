import React from "react";
import ReactDOM from "react-dom/client";

import SearchRouterProvider from "providers/search-router-provider";

import "./normalize.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchRouterProvider />
  </React.StrictMode>
);

reportWebVitals();
