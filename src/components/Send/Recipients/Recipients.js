import React from 'react';
import classes from './Recipients.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Toggle from '../../../shared/components/Toggle/Toggle';
import Checkbox from '../../../shared/components/Checkbox/Checkbox';

const Recipients = (props) => {
    return (
        <div classes={classes.Recipients}>
            <SectionTitle>Recipients</SectionTitle>
            <Toggle toggleOptions={['Complete in order', 'Complete in Any Order']} toggle={(event) => {console.log('recipients toggle event', event)}} />
            <Checkbox checkboxChange={(event)=>{console.log('ckeckbox change recipients', event);}}>label</Checkbox>
        </div>
    );
}

export default Recipients;