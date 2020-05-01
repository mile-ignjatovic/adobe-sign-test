import React from 'react';
import classes from './Button.module.css';

/**
 * Button element wrapper
 * if props.link show button as a link
 * @param { link: boolean, onClick: callback } props 
 */
const Button = (props) => {

    let cls = props.link ? classes['Button-link'] : classes['Button-normal'];
    cls = props.action ? classes['Button-action'] : cls;
    cls = [cls, classes.Button].join(' ');

    return (
    <button style={props.styles} className={cls} onClick={props.click}>{props.children}</button>
    );
}

export default Button;