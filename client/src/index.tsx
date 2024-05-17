// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Components/Layout";
import App from "./App";
import Signin from "./Signin";
import TestComponent from "./Components/TestComponent";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

root.render(
  <>
    <Layout>
      <Signin />
      <App />
    </Layout>
  </>
);
