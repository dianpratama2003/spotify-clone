import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { DataProvider } from "./components/DataProvider.js";
import reducer, { initialState } from "./script/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
