// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { StoreProvider, RootStore } from "@app/stores/stores";
import "moment/locale/ru";
import "antd/dist/antd.dark.css";
import "@assets/scss/main.scss";
import "@assets/scss/animations.scss";

moment.locale("ru");

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider value={new RootStore()}>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
