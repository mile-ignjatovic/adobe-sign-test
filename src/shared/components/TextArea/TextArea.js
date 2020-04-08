import React from 'react';
import classes from './TextArea.module.css';
import { generateId } from '../../utils/utils';

const TextArea = (props) => {
const textAreaId = generateId('TextArea');
const borderBottom = props.hideBottomBorder ? {borderBottom: 'none'} : null

return (
        <div className={classes.TextArea}
        style={{width: props.size}}
        >
            <label htmlFor={textAreaId} className={classes['TextArea-label']}>{props.label}</label>
            <div className={classes['TextArea-container']} >
                <textarea   
                    style={borderBottom}
                    rows={props.rows ? props.rows : '5'}
                    id={textAreaId}
                    className={classes['TextArea-container__el']} 
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.onTextChange}/>
            </div>
        </div>
    );
}

export default TextArea;