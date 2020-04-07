import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.module.css';
import Send from './components/Send/Send';

import Header from './components/Header/Header';
function App() {

  return (
    <BrowserRouter>
      <main className="App">
      <Header />
       <Send></Send>
      </main>
    </BrowserRouter>
  );
}

export default App;
