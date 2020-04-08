import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.Navbar}>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="./SendPage">Send</NavLink>
            <NavLink to="./ManagePage">Manage</NavLink>
            <NavLink to="">Playground</NavLink>
        </div>
    )
}

export default Navbar;