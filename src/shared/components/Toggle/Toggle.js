import React, {useState}from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {

    let [toggleState, setToggleState] = useState(true);

    const changeToggle = () => {
        setToggleState(!toggleState);
        props.toggle(toggleState);
    }
    
    let labelClasses = toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    return (
        <div className={classes.Toggle}>
            <input  className={classes['Toggle-input']} type="checkbox" id="switch" onChange={() => {changeToggle()}}/><label className={classes['Toggle-label']} htmlFor="switch"></label>
            <span className={labelClasses}>{props.children}</span>
        </div>
    );
}

export default Toggle;