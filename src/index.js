// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Signin from './Signin';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
<>  
  <Signin />
  <App title={'I am a prop!'} />
</>
);