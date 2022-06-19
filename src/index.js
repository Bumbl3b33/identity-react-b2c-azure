import { PublicClientApplication } from '@azure/msal-browser';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { msalConfig } from './config/msalConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App instance={msalInstance}/>
    </BrowserRouter>
  </React.StrictMode>
);