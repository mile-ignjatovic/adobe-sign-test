import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.module.css';
import SendPage from './components/Send/Send';
import PlaygroundPage from './components/playground/Playground';


import DashboardPage from './components/DashboardPage';
import ManagePage from './components/ManagePage';

import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route
        path="/"
        component={DashboardPage}
        exact
      />
      <Route
        path="/send"
        component={SendPage}
      />
      <Route
        path="/manage"
        component={ManagePage}
      />
      <Route
        path="/playground"
        component={PlaygroundPage}
      />
    </BrowserRouter>
  );
}

export default App;
