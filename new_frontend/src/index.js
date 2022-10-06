import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./context";
import axios from "axios";
axios.defaults.baseURL = "https://trashgo.elliottchong.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContext>
      <App />
    </AppContext>
  </BrowserRouter>
);
