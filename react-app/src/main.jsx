import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Layout } from "./Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <Layout />
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
