// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './index.css'; // Import any global CSS or styling if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the root DOM node where the App component will be rendered
);
