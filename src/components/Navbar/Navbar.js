import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.Navbar}>
            <NavLink className={style.LinkPath} to="/">Dashboard</NavLink>
            <NavLink className={style.LinkPath} to="./SendPage">Send</NavLink>
            <NavLink className={style.LinkPath} to="./ManagePage">Manage</NavLink>
            <NavLink className={style.LinkPath} to="">Playground</NavLink>
        </div>
    )
}

export default Navbar;