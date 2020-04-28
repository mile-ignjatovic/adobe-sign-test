import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import SendFileUpolad from '../SendFileUpload/SendFileUpload'
import Message from './Message/Message';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import StoreProvider from './SendStore';

const Send = (props) => {

    return (
            <StoreProvider>
                <section className={classes.Send}>
                    <Recipients></Recipients>
                    <div className={classes['Send-message']}>
                        <SectionTitle>Message</SectionTitle>
                        <div style={{display: 'flex'}}>
                            <div className={classes.firstBox}>
                                <Message />
                                <SendFileUpolad />
                            </div>
                            <div className={classes.secondBox}>
                                TODO: send options component
                            </div>
                        </div>
                    </div>
                </section>
            </StoreProvider>
    );
}

export default Send;