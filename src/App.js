// src/App.js
import React from 'react';
import './app.scss';

const App = ({title}) => {
  return (
    <div>
      <h1>Hello, React with Webpack!</h1>
      <h1>Prop: {title}</h1>
    </div>
  );
};

export default App;