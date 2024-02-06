import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/globalstyle";
import RoutesComponent from "./routes";

const root = document.getElementById("root");
const rootInstance = createRoot(root);
rootInstance.render(
  <>
    <RoutesComponent /> <GlobalStyle />
  </>
);
