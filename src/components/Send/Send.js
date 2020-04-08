import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import Message from './Message/Message';

const Send = (props) => {
    return (
        <section className={classes.Send}>
            <Recipients></Recipients>
            <div className={classes['Send-message']}>
                <div>
                   <Message></Message>
                    <div>
                        TODO: file upload component
                    </div>
                </div>
                <div>
                    TODO: send options component
                </div>
            </div>
        </section>
    );
}

export default Send;