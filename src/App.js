import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.module.css';
import Send from './components/Send/Send';

function App() {

  return (
    <BrowserRouter>
      <main className="App">
       <Send></Send>
      </main>
    </BrowserRouter>
  );
}

export default App;
