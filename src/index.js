import React from "react";
import ReactDOM from "react-dom";
import "./css/main.scss";
import "./css/spacing.scss";
import App from "./App";
import { SWRConfig } from "swr";

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
