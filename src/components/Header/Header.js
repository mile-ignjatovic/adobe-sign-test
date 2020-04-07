
import React from 'react';
import style from './Header.module.css';
import sunflower from './sunflower50.png';
import qmark16 from './qmark16.png';
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardPage from '../DashboardPage';
import ManagePage from '../ManagePage';
import SendPage from '../SendPage';


const Header = (props) => {
    return (
        <div>
            <div className={style.Header}>
                <div className={style.HeaderLeft}>
                    <img src={sunflower} alt="sf" />
                    <div className={style.Texts}>
                        <span className={style.smallText}>POWERED BY</span>
                        <span className={style.largeText}>Adobe Sign</span>
                    </div>
                </div>
                <div className={style.HeaderRight}>
                    <button className={style.FirstButton}>Engage</button>
                    <button className={style.SecondButton}>New ?</button>
                    <img src={qmark16} alt="qm" />
                </div>
            </div>
            <BrowserRouter>
                <Navbar />
                <Switch>
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
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Header;