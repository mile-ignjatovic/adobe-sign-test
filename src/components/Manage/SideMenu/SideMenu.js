import React from 'react';
import classes from './SideMenu.module.css';
import { NavLink } from 'react-router-dom';


const SideMenu = (props) => {

    const navItems = [
        {label: 'All', link: '', message: 'All agreements.'},
        {label: 'In Progress', link: '#in-progress', message: 'After sending an agreement for signing, it\'ll appear here.'},
        {label: 'Waiting for You', link: '#waiting', message: 'Agreements waiting for your signature or approval will appear here.'},
        {label: 'Completed', link: '#completed', message: 'Once all recipients sign or approve an agreement, it\'ll appear here.'},
        {label: 'Canceled', link: '#canceled', message: 'If you cancel agreement, it\'ll appear here.'},
        {label: 'Expired', link: '#expired', message: 'If an agreement expires, it\'ll appear here.'},
        {label: 'Draft', link: '#draft', message: 'If you didn\'t finish an agreement it\'ll appear here.'}
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
                    to={{
                        pathname: props.history.location.pathname,
                        hash: el.link,
                        state: {label: el.label, message: el.message}
                    }}><span className={classes.span}>{el.label}</span></NavLink>
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