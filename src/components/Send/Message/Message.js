import React from 'react';
import classes from './Message.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';

const Message = (props) => {
    return (
        <div className={classes['Message-main']}>
            <SectionTitle>Message</SectionTitle>
            <input />
            <textarea />
        </div>
    );
}

export default Message;