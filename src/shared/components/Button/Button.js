import React from 'react';
import classes from './Button.module.css';

/**
 * Button element wrapper
 * if props.link show button as a link
 * @param { link: boolean, onClick: callback } props 
 */
const Button = (props) => {

    let cls;

    switch(props.type) {
        case 'link': {
            cls = classes['Button-link'];
            break;
        }
        case 'action': {
            cls = classes['Button-action'];
            break;
        }
        case 'white': {
            cls = classes['Button-white'];
            break
        }
        default: cls = classes['Button-normal'];
    }

    cls = [classes.Button, cls].join(' ');

    return (
    <button disabled={props.disabled} style={props.styles} className={cls} onClick={props.click}>{props.children}</button>
    );
}

export default Button;