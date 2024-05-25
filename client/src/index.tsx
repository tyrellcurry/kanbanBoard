// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Layout from "./Components/Layout";
import App from "./App";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Layout>
    </Auth0Provider>
  </>
);
