// src/App.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./app.scss";

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <main>
      {isAuthenticated ? (
        <div>
          <h1>Hi {user?.name ? user?.name : "there"}, you are signed in!</h1>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h1>You are not signed in</h1>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}
    </main>
  );
};

export default App;
