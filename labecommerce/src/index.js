import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Base } from './global/GlobalBase';
import { Reset } from './global/GlobalReset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Base />
    <Reset />
  </React.StrictMode>
);

