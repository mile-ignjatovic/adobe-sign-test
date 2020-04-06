import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
    return (
       <div className={classes['Checkbox']} onChange={props.checkboxChange}>
           <input 
           name="checkbox"
           className={classes['Checkbox-input']} 
           type="checkbox" 
           value={props.value}
           checked={props.value}
            />
           <label htmlFor="checkbox" className={classes['Checkbox-label']}>{props.label}</label>
       </div>
    );
}

export default Checkbox;