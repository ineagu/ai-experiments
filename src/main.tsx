import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { logEnvironmentInfo, logCssInfo } from './debug';

// Log environment information 
logEnvironmentInfo();

// Log CSS information after a short delay to ensure styles are loaded
setTimeout(logCssInfo, 500);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 