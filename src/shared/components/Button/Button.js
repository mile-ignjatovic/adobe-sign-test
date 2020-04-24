import React from 'react';
import classes from './Button.module.css';

/**
 * Button element wrapper
 * if props.link show button as a link
 * @param { link: boolean, onClick: callback } props 
 */
const Button = (props) => {

    let cls = props.link ? classes.Link : classes.Button;

    return (
    <button className={cls} onClick={props.click}>{props.children}</button>
    );
}

export default Button;