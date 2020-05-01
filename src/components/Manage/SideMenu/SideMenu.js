import React from 'react';
import classes from './SideMenu.module.css';
import { NavLink } from 'react-router-dom';


const SideMenu = (props) => {

    const navItems = [
        {label: 'In Progress', link: '#in-progress'},
        {label: 'Waiting for You', link: '#waiting'},
        {label: 'Completed', link: '#completed'},
        {label: 'Canceled', link: '#canceled'},
        {label: 'Expired', link: '#expired'},
        {label: 'Draft', link: '#draft'}
    ];

    let nav = navItems.map((el, index) => {
        return (
            <div className={classes['SideMenu-items__navItem']} key={index}>
                <NavLink  
                    activeStyle={{
                        backgroundColor: 'var(--lighterGray)'
                    }}
                    isActive={(_, location) => {
                        return location.hash === el.link;
                    }}
                    to={props.history.location.pathname + el.link}><span className={classes.span}>{el.label}</span></NavLink>
            </div>
        )
    })
    return (
        <div className={classes.SideMenu}>
            <div style={{paddingLeft: '1rem', marginTop: '2rem', fontSize: '.8rem', color: 'var(--darkGray)'}}>STATUS</div>
            <div className={classes['SideMenu-items']}>
                {nav}
            </div>
        </div>
    );
}

export default SideMenu;