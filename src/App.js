import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.module.css';
import MobxTest from './components/MobxTest/MobxTest';
import MobxTestStoreProvider from './components/MobxTest/MobxTestStore';
import StyledComponentTest from './components/StyledComponentTest/StyledComponentTest';
import Test from './components/Test/Test';


import DashboardPage from './components/DashboardPage';
import ManagePage from './components/ManagePage';
import SendPage from './components/SendPage';

import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Switch> */}
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
      {/* </Switch> */}
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

  );
}

export default App;
