import React, {useState, useEffect, useContext} from 'react';
// import classes from './EmailDropdownList.module.css';
import axios from 'axios-observable';
import EmailDropdown from './EmailDropdown/EmailDropdown';
import {generateId} from '../../../../shared/utils/utils';
import { SendStoreContext } from './../../SendStore';
import { useObserver } from 'mobx-react';

const EmailDropdownList = (props) => {

    const store = useContext(SendStoreContext);
    const [dropdownData, setDropdownData] = useState([]);
    
    useEffect(() => {
        callBeForUsersList();
    }, [])

    const callBeForUsersList = (query) => {
        axios.get('http://localhost:3001/users' + (query ? '?name=' + query : '')).subscribe(res => {
            if (res && res.data && res.data.length > 0) {
                setDropdownData(res.data);
            }
        });
    }

    const addNewItem = () => {
        let userDataToAdd = {id: generateId('list-item')};
        let updatedList = [...store.recipientList, userDataToAdd];
        store.setRecipientList(updatedList);
    }

    const removeItem = (id) => {
        let updatedList = [...store.recipientList];
        if (updatedList.length > 1) {
            updatedList.splice(updatedList.findIndex(el => el.id === id), 1)
            store.setRecipientList(updatedList);
        }
    }

    const inputValueChange = (oldVal, val, isBackspace, id) => {
        if (val && oldVal !== val && oldVal.length < 1) {
            addNewItem()
        }
        if (!val && isBackspace) {
            removeItem(id)
        }
    }

    const onNumberChange = (currIndex, newIndexTarget) => {
        let newIndex = newIndexTarget.target.value - 1; 
        let tempList = [...store.recipientList];
        if (!(currIndex === store.recipientList.length - 2 && newIndex > currIndex)) {
            let item = tempList.splice(currIndex, 1);
            tempList.splice(newIndex, 0, ...item);
            store.setRecipientList([...tempList]);
        }
    }

    let emailList = useObserver(() => {
        return store.recipientList && store.recipientList.map((el, index) => 
             <EmailDropdown
                    key={el.id} 
                    id={el.id}
                    number={props.inOrder ? index + 1 : undefined} 
                    isLast={store.recipientList.length - 1 === index}
                    onNumberChange={(number) => onNumberChange(index, number)}
                    inputValue={(oldVal, val, isBackspace) => inputValueChange(oldVal, val, isBackspace, el.id)} 
                    removeItem={() => removeItem(el.id)}
                />
            )
    })

    return (
        <section>
            {
               emailList
            }
        </section>
    );
}

export default EmailDropdownList;