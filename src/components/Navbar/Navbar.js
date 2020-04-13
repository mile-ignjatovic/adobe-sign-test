import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.Navbar}>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/send">Send</NavLink>
            <NavLink to="/manage">Manage</NavLink>
            <NavLink to="/playground">Playground</NavLink>
        </div>
    )
}

export default Navbar;