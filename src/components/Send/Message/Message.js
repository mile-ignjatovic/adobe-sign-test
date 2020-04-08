import React , { useState } from 'react';
import classes from './Message.module.css';
import NormalInput from '../../../shared/components/NormalInput/NormalInput';
import TextArea from '../../../shared/components/TextArea/TextArea';

const Message = (props) => {

    // TODO: set value to be handled by mobx
    let [inputVal, setInputVal] = useState('');
    const onInputChangeHandler = (event) => {
        setInputVal(event.target.value)
    }
    let [textVal, settextVal] = useState('');
    const onTextChangeHandler = (event) => {
        settextVal(event.target.value)
    }
    return (
        <div className={classes['Message-main']}>
            <NormalInput hideBottomBorder value={inputVal} placeholder="Agreement Name" onInputChange={onInputChangeHandler} />
            <TextArea value={textVal} placeholder="Please review and complete this document." onTextChange={onTextChangeHandler}/>
        </div>
    );
}

export default Message;