import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
    <div style={props.styles} className={classes.Card}>{props.children}</div>
    );
}

export default Card;