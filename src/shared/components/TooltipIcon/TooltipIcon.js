import React from 'react';
import classes from './TooltipIcon.module.css';

const TooltipIcon = (props) => {
    let toolTipClass = [props.addClass, classes.Tooltip, 'fa fa-question'].join(' ');
    
    return (
        <span><i style={props.styles} onClick={props.click} className={toolTipClass} aria-hidden="true"></i></span>
    );
}

export default TooltipIcon;