import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import SendFileUpolad from '../SendFileUpload/SendFileUpload'

const Send = (props) => {
    return (
        <div>
            <section className={classes.Send}>
                <Recipients></Recipients>
            </section>
            <SendFileUpolad />
        </div>
    );
}

export default Send;