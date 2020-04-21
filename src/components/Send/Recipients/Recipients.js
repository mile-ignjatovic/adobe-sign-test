import React, {useState} from 'react';
import classes from './Recipients.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Toggle from '../../../shared/components/Toggle/Toggle';
import Button from '../../../shared/components/Button/Button';
import EmailDropdownList from './EmailDropdownList/EmailDropdownList';

const Recipients = (props) => {

    let [order, setOrder] = useState(false)

    const toggleHandler = (ev) => {
        setOrder(ev)
    }
    
    return (
        <div className={classes['Recipients']}>
            <SectionTitle>Recipients</SectionTitle>
            <div className={classes['Recipients-header']}>
                <Toggle 
                    toggleOptions={['Complete in order', 'Complete in Any Order']} 
                    toggle={(event) => toggleHandler(event)} />
                    <div className={classes['Recipients-buttons']}>
                        <Button link>Add me</Button>
                        <span style={{margin: '0 .5rem', color: 'rgb(0,0,0,.5)'}}>|</span>
                        <Button link>Add Recipient Group</Button>
                        <span style={{margin: '0 .5rem', color: 'rgb(0,0,0,.5)'}}>|</span>
                        <span>icon</span>
                    </div>
            </div>
            <EmailDropdownList inOrder={order}/>
            <Button link>Show CC</Button>
        </div>
    );
}

export default Recipients;