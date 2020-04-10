import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import SendFileUpolad from '../SendFileUpload/SendFileUpload'
import Message from './Message/Message';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';

const Send = (props) => {
    return (
        <section className={classes.Send}>
            <Recipients></Recipients>
            <div className={classes['Send-message']}>
                <div>
                    <SectionTitle>Message</SectionTitle>
                   <Message></Message>
                    <SendFileUpolad />
                </div>
                <div>
                    TODO: send options component
                </div>
            </div>
        </section>
    );
}

export default Send;