import React, {useState} from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {

    let [checkboxState, setCheckboxState] = useState(props.checked ? !props.checked : true);

    const changeCheckbox = () => {
        setCheckboxState(!checkboxState);
        props.checkboxChange(checkboxState);
    }

    return (
       <div style={props.styles} className={classes['Checkbox']}>
           <input 
           name="checkbox"
           className={classes['Checkbox-input']} 
           type="checkbox" 
           value={!checkboxState}
           checked={!checkboxState}
           onChange={() => {changeCheckbox()}}
            />
           <label htmlFor="checkbox" className={classes['Checkbox-label']}>{props.children}</label>
       </div>
    );
}

export default Checkbox;