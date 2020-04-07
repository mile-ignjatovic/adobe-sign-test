import React, {useState}from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {

    const inputId = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);

    let [toggleState, setToggleState] = useState(props.checked ? !props.checked : true);

    const changeToggle = () => {
        setToggleState(!toggleState);
        props.toggle(toggleState);
    }
    
    let labelClassesOne = !toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    let labelClassesTwo = toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    
    let toggleOptionOne = props.toggleOptions && props.toggleOptions[0] ? ( <span className={labelClassesOne}>
        {props.toggleOptions[0]}
    </span>): null; 
    let toggleOptionTwo = props.toggleOptions && props.toggleOptions[1] ? ( <span className={labelClassesTwo}>
        {props.toggleOptions[1]}
    </span>): null; 

    return (
        <div 
            className={classes.Toggle}>
           {toggleOptionOne}
            <input  
                className={classes['Toggle-input']} 
                type="checkbox" 
                id={inputId} 
                checked={!toggleState}
                onChange={() => {changeToggle()}}/>
            <label 
                className={classes['Toggle-label']} 
                htmlFor={inputId}>
            </label>
            {toggleOptionTwo}
        </div>
    );
}

export default Toggle;