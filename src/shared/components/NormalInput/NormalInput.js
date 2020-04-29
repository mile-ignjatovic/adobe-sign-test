import React from 'react';
import {generateId} from '../../utils/utils';
import classes from './NormalInput.module.css';

const NormalInput = (props) => {
    const inputId = generateId('NormalInput');
    const borderBottom = props.hideBottomBorder ? {borderBottom: 'none'} : null
    const borderLeft = props.hideBorderLeft ? {borderLeft: 'none'} : null
    const backgroundColor = props.backgroundColor ? {backgroundColor: props.backgroundColor} : null
    return (
        <div className={classes.NormalInput} 
        style={{width: props.size, ...props.styles}}
        >
            <label htmlFor={inputId} className={classes['NormalInput-label']}>{props.label}</label>
            <div className={classes['NormalInput-container']} >
                <input 
                    style={{...borderBottom, ...backgroundColor, ...borderLeft}}
                    id={inputId}
                    className={classes['NormalInput-container__el']} 
                    type={props.type ? props.type : 'text'} 
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.onInputChange}
                    onBlur={() => props.onInputFocus ? props.onInputFocus(false) : null}
                    onFocus={() => props.onInputFocus ? props.onInputFocus(true) : null}/>
                </div>
        </div>
    );
}

export default NormalInput;