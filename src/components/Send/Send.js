import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';

const Send = (props) => {
    return (
        <section className={classes.Send}>
            <Recipients></Recipients>
        </section>
    );
}

export default Send;