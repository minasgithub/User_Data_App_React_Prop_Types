import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppContainer from "./AppContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>,
  rootElement
);
