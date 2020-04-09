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
        path="/SendPage"
        component={SendPage}
      />
      <Route
        path="/ManagePage"
        component={ManagePage}
      />
      <Route
        path="/PlaygroundPage"
        component={PlaygroundPage}
      />
    </BrowserRouter>

    // <BrowserRouter>
    //   <main className="App">
    //     App works!
    //     <hr />
    //     Routing test:
    //     <br />
    //     <Link to="mobx">Test Mobx</Link>
    //     <br />
    //     <Link to="styled">Test StyledComponent</Link>

    //     <Route path="/" exact component={Test} />
    //     <MobxTestStoreProvider>
    //       <Route path="/mobx" exact component={MobxTest} />
    //     </MobxTestStoreProvider>
    //     <Route path="/styled" exact component={StyledComponentTest} />
    //   </main>
    // </BrowserRouter>

    // return (
    //   <BrowserRouter>
    //     <main className="App">
    //     <Header />
    //      <Send></Send>
    //     </main>
    //   </BrowserRouter>
  );
}

export default App;
