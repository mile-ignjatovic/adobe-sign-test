import React , { useState, useContext } from 'react';
import classes from './Message.module.css';
import NormalInput from '../../../shared/components/NormalInput/NormalInput';
import TextArea from '../../../shared/components/TextArea/TextArea';
import {SendStoreContext} from '../SendStore';

const Message = (props) => {

    const store = useContext(SendStoreContext);

    let [timer, setTimer] = useState(null);
    let [name, setName] = useState('');
    let [text, setText] = useState('');

    const onInputChangeHandler = (event) => {
        let value = event.target.value;
        setName(value);
        if (timer) {
            clearTimeout(timer);
        }
        let tempTimer = setTimeout(() => {
            store.setAgreementName(value)
        }, 200)
        setTimer(tempTimer);
    }
    const onTextChangeHandler = (event) => {
        let value = event.target.value;
        setText(value);
        if (timer) {
            clearTimeout(timer);
        }
        let tempTimer = setTimeout(() => {
            store.setAgreementText(value)
        }, 200)
        setTimer(tempTimer);
    }
    return (
        <div className={classes['Message-main']}>
            <NormalInput hideBottomBorder value={name} placeholder="Agreement Name" onInputChange={onInputChangeHandler} />
            <TextArea value={text} placeholder="Please review and complete this document." onTextChange={onTextChangeHandler}/>
        </div>
    );
}

export default Message;