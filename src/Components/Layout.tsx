// src/Layout.tsx
import React from "react";
import "../../src/app.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="./images/logo-1.png" alt="" />
            Tira
          </a>
        </div>
        <ul>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        Copyright &copy; Tira 2024
      </footer>
    </div>
  );
};

export default Layout;
