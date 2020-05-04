import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.module.css';
import SendPage from './components/Send/Send';
import PlaygroundPage from './components/playground/Playground';
import Home from './components/Home';
import Manage from './components/Manage/Manage';
import Header from './components/Header/Header';
import Modal from './shared/components/Modal/Modal';

import AppStoreProvider from './AppStore';

function App() {
  return (
    <AppStoreProvider>
        <Modal />
        <BrowserRouter>
            <Header />
            <Route
              path="/"
              component={Home}
              exact
            />
            <Route
              path="/send"
              component={SendPage}
            />
            <Route
              path="/manage"
              component={Manage}
            />
            <Route
              path="/playground"
              component={PlaygroundPage}
            />
        </BrowserRouter>
    </AppStoreProvider>
  );
}

export default App;
