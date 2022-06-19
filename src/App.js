import React from 'react';
import {Routes, Route } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import Home from './components/Home';

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </MsalProvider>
  );
}

export default App;
