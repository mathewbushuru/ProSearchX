import React from "react";
import ReactDOM from "react-dom/client";

import AppProvider from "providers";

import "./normalize.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);

reportWebVitals();
