import React, {useState}from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {

    let [toggleState, setToggleState] = useState(true);

    const changeToggle = () => {
        setToggleState(!toggleState);
        props.toggle(toggleState);
    }
    
    let labelClassesOne = !toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    let labelClassesTwo = toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    
    let toggleOptionOne = props.toggleOptions[0] ? ( <span className={labelClassesOne}>
        {props.toggleOptions[0]}
    </span>): null; 
    let toggleOptionTwo = props.toggleOptions[1] ? ( <span className={labelClassesTwo}>
        {props.toggleOptions[1]}
    </span>): null; 

    return (
        <div 
            className={classes.Toggle}>
           {toggleOptionOne}
            <input  
                className={classes['Toggle-input']} 
                type="checkbox" 
                id="switch" 
                onChange={() => {changeToggle()}}/>
            <label 
                className={classes['Toggle-label']} 
                htmlFor="switch">
            </label>
            {toggleOptionTwo}
        </div>
    );
}

export default Toggle;