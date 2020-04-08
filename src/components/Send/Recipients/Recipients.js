import React from 'react';
import classes from './Recipients.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Toggle from '../../../shared/components/Toggle/Toggle';
import Button from '../../../shared/components/Button/Button';

const Recipients = (props) => {
    return (
        <div classes={classes.Recipients}>
            <SectionTitle>Recipients</SectionTitle>
            <div className={classes['Recipients-header']}>
                <Toggle 
                    toggleOptions={['Complete in order', 'Complete in Any Order']} 
                    toggle={(event) => {console.log('recipients toggle event', event)}} />
                    <div>
                        <Button link>Add me</Button>
                        <span style={{margin: '0 .5rem', color: 'rgb(0,0,0,.5)'}}>|</span>
                        <Button link>Add Recipient Group</Button>
                        <span style={{margin: '0 .5rem', color: 'rgb(0,0,0,.5)'}}>|</span>
                        <span>icon</span>
                    </div>
            </div>
            <div className={classes['Recipients-dropdown']}>TODO: autocomplete dropdown</div>
            <Button link>Show CC</Button>
        </div>
    );
}

export default Recipients;