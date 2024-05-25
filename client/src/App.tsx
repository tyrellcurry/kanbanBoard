// src/App.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./app.scss";
import KanbanBoard from "./Components/KanbanBoard";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <div className="app">
      {isLoading ? (
        <div className="loading">
          <img src="./images/loading.gif" alt="Loading spinner" />
        </div>
      ) : (
        <div>
          {isAuthenticated ? (
            <div className="kanban">
              <div className="title">
                <h1>{user?.name ? `${user?.name}'s` : ""} Kanban Board</h1>
              </div>
              <DndProvider backend={HTML5Backend}>
                <KanbanBoard />
              </DndProvider>
            </div>
          ) : (
            <div className="intro">
              <div className="title">
                <h1>Welcome to Tira!</h1>
                <p>
                  A Kanban Board application to manage your tasks, completely
                  free to use!
                </p>
                <img
                  src="./images/kanban-illustration.png"
                  alt="Kanban Board"
                />
              </div>
              <div className="get_started">
                <p>Ready to get started?</p>
                <div className="buttons">
                  <button
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          screen_hint: "signup",
                          mode: "signUp",
                        },
                      })
                    }>
                    Sign Up
                  </button>
                  <button onClick={() => loginWithRedirect()}>Sign In</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
