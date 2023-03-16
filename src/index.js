import React from "react";
import ReactDOM from "react-dom/client";
import config from "react-global-configuration";
import { responseToJson } from "core/utils";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

fetch("/config.json")
  .then(responseToJson)
  .then((appConfig) => {
    config.set(appConfig);
  })
  .then(() => import("./App"))
  .then((module) => {
    const App = module.default;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  });
