import React , { useState, useContext } from 'react';
import classes from './Message.module.css';
import NormalInput from '../../../shared/components/NormalInput/NormalInput';
import TextArea from '../../../shared/components/TextArea/TextArea';
import {SendStoreContext} from '../SendStore';
import { useObserver } from 'mobx-react';

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
            store.setTitle(value)
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

    let input = useObserver(() => {
        return <NormalInput hideBottomBorder value={name ? name : store.uploadedFiles && store.uploadedFiles[0] && store.uploadedFiles[0].name} placeholder="Agreement Name" onInputChange={onInputChangeHandler} />
    })
    return (
        <div className={classes['Message-main']}>
            {input}
            <TextArea value={text} placeholder="Please review and complete this document." onTextChange={onTextChangeHandler}/>
        </div>
    );
}

export default Message;