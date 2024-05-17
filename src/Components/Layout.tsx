// src/Layout.tsx
import React from "react";
import '../../src/app.scss';

const Layout = ({children}: any) => {
  return (
  <div className="layout">
    <nav>
      <div><img src="./images/logo-1.png" alt="" /></div>
      <ul>
        <li>
          <button>Sign In</button>
        </li>
      </ul>
    </nav>
    <h1>I am the layout</h1>
    {children}
  </div>
  )};

export default Layout;
