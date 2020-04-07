import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

    let cls = props.link ? classes.Link : classes.Button;

    return (
    <button className={cls} onClick={props.click}>{props.children}</button>
    );
}

export default Button;