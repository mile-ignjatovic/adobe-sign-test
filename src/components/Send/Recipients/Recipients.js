import React, {useState, useContext} from 'react';
import { useObserver } from 'mobx-react';
import classes from './Recipients.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Toggle from '../../../shared/components/Toggle/Toggle';
import Button from '../../../shared/components/Button/Button';
import EmailDropdownList from './EmailDropdownList/EmailDropdownList';
import { SendStoreContext } from './../SendStore';
import { generateId } from '../../../shared/utils/utils';

const Recipients = (props) => {

    const store = useContext(SendStoreContext);
    const [addMe, setAddMe] = useState(false);
    let [order, setOrder] = useState(false)

    const toggleHandler = (ev) => {
        setOrder(ev)
    }

    const addMeToList = () => {
        setAddMe(!addMe);
        if (!addMe) {
            store.setRecipientList([...store.recipientList, {id: generateId('list-item'), email: 'me@test.com', name: 'Me'}])
        } else {
            let newStore = store.recipientList.splice(store.recipientList.findIndex(el => el.name === 'Me'), 1);
            store.setRecipientList([...newStore]);
        }
    }
    
    return (
        <div className={classes['Recipients']}>
            <SectionTitle>Recipients</SectionTitle>
            <div className={classes['Recipients-header']}>
                <Toggle 
                    toggleOptions={['Complete in order', 'Complete in Any Order']} 
                    toggle={(event) => toggleHandler(event)} />
                    <div className={classes['Recipients-buttons']}>
                        <Button link click={() => addMeToList()}>{addMe ? 'Remove me' : 'Add me'}</Button>
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