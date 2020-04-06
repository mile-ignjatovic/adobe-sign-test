import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import Playground from '../playground/Playground';

const Send = (props) => {
    return (
        <section className={classes.Send}>
            <Recipients></Recipients>
            <Playground></Playground>
        </section>
    );
}

export default Send;