// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Signin from "./Signin";
import TestComponent from "./Components/TestComponent";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

root.render(
  <>
    <TestComponent />
    <Signin />
    <App title={"Tester"} />
  </>
);
