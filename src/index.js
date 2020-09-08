import React from "react";
import ReactDOM from "react-dom";
import "./css/main.scss";
import "./css/spacing.scss";
import App from "./App";
import { SWRConfig } from "swr";

ReactDOM.render(
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: (...args) => fetch(...args).then((res) => res.json()),
    }}
  >
    <App />
  </SWRConfig>,
  document.getElementById("root")
);
