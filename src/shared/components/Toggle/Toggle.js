import React, {useState}from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {

    let [toggleState, setToggleState] = useState(true);

    const changeToggle = () => {
        setToggleState(!toggleState);
        props.toggle(toggleState);
    }

    let toggleOptions = props.toggleOptions ? props.toggleOptions : ['option one', 'option two'];
    
    let labelClassesOne = !toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    let labelClassesTwo = toggleState ? [classes['Toggle-span'], classes['Toggle-span-false']].join(' ') : classes['Toggle-span'];
    
    let toggleOptionOne = toggleOptions[0] ? ( <span className={labelClassesOne}>
        {toggleOptions[0]}
    </span>): null; 
    let toggleOptionTwo = toggleOptions[1] ? ( <span className={labelClassesTwo}>
        {toggleOptions[1]}
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