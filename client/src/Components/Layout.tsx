// src/Layout.tsx
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../src/app.scss";

const Layout = ({ children }: any) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [showAttribution, setShowAttribution] = useState(false);
  return (
    <div className="layout">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="./images/logo-2.png" alt="" />
            Tira
          </a>
        </div>
        {isAuthenticated && (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }>
            Sign Out
          </button>
        )}
      </nav>
      <main>{children}</main>
      <footer>
        <p>Copyright &copy; Tira 2024</p>
        <button className="attribution_link" onClick={() => setShowAttribution(!showAttribution)}>Attributions</button>
        {showAttribution &&        
        <div className="attributions">
          <div className="close">
            <button onClick={() => setShowAttribution(!showAttribution)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                {/*<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <ul>
            <li>
              Tira is inspired by{" "}
              <a href="https://www.atlassian.com/software/jira/features/kanban-boards">
                Jira
              </a>
              . This project is for non-commercial use and solely a personal
              project to showcase technologies.
            </li>
            <li>
              <a href="https://www.freepik.com/free-vector/kanban-method-concept-illustration_28902450.htm#fromView=search&page=1&position=27&uuid=fff97028-5419-4e23-b42b-46f7fb0a3f8b">
                Image by storyset on Freepik
              </a>
            </li>
            <li>
              <a href="https://loading.io/icon/">
                The icon "heart" is provided by loading.io
              </a>
            </li>
          </ul>
        </div>
        }
      </footer>
    </div>
  );
};

export default Layout;
