import React, {useState} from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {

    let [checkboxState, setCheckboxState] = useState(true);

    const changeCheckbox = () => {
        setCheckboxState(!checkboxState);
        props.checkboxChange(checkboxState);
    }

    return (
       <div className={classes['Checkbox']}>
           <input 
           name="checkbox"
           className={classes['Checkbox-input']} 
           type="checkbox" 
           value={!checkboxState}
           checked={!checkboxState}
           onChange={() => {changeCheckbox()}}
            />
           <label htmlFor="checkbox" className={classes['Checkbox-label']}>{props.label}</label>
       </div>
    );
}

export default Checkbox;