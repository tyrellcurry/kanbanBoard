// src/App.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./app.scss";

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <main className="app">
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
              <div className="board">
                board will go here
              </div>
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
                  <button onClick={() => loginWithRedirect({authorizationParams: {
                      screen_hint: "signup",
                      mode: 'signUp',
                    }})}>Sign Up</button>
                  <button onClick={() => loginWithRedirect()}>Sign In</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default App;
