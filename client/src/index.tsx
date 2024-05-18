// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Layout from "./Components/Layout";
import App from "./App";
import Signin from "./Signin";
import TestComponent from "./Components/TestComponent";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

root.render(
  <>
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN as string}
      clientId={process.env.AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <Layout>
        <Signin />
        <App />
      </Layout>
    </Auth0Provider>
  </>
);
