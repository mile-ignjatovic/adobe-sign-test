import React, {useState, useRef, useContext} from 'react';
import classes from './EmailDropdown.module.css';
import { SendStoreContext } from '../../../SendStore';
import { generateId } from '../../../../../shared/utils/utils';
import { useObserver } from 'mobx-react';

const EmailDropdown = (props) => {
    const store = useContext(SendStoreContext);

    let [editMode, setEditMode] = useState(false);
    let [currentRecipient, setCurrentRecipient] = useState(props.value);
    // let [users, setUsers] = useState([]);

    const inputRef = useRef();

    // filter list of users for dropdown TODO:
    // const filterUsersForDropdown = (value) => {
    //     if (props.users) {
    //         let usersToShow = [...props.users];
    //         let item = usersToShow.find(el => el.email === value);
    //         if (item) usersToShow.splice(usersToShow.indexOf(item), 1);
    //         setUsers(usersToShow);
    //     }
    // }

    const onInputChange = (event) => {
        let value = event.target.value;
        setCurrentRecipient({...currentRecipient, email: value, isLast: false});

        let updatedList = [...store.recipientList];
        let recipientIndex = updatedList.findIndex(el => currentRecipient && el.id === currentRecipient.id);
        updatedList[recipientIndex] = {...currentRecipient};
        
        if (!updatedList[recipientIndex + 1]) {
            updatedList.push({id: generateId('list-item'), isLast: true});
        }
        
        store.setRecipientList(updatedList);
        
        // filterUsersForDropdown(value);
    }

    const onNumberChange = (event) => {
        let value = +event.target.value;
        let updatedList = [...store.recipientList];
        let recipientIndex = updatedList.findIndex(el => currentRecipient && el.id === currentRecipient.id);
        let item = updatedList[recipientIndex];

        if (!(recipientIndex === store.recipientList.length - 2 && value - 1 > recipientIndex)) {
            setCurrentRecipient({...currentRecipient, number: value})
    
            updatedList.splice(recipientIndex, 1);
            updatedList.splice(value -1, 0, item);
            store.setRecipientList(updatedList);
        }
    }

    const removeItem = () => {
        let updatedList = [...store.recipientList];
        if (updatedList.length > 1) {
            updatedList.splice(updatedList.findIndex(el => el.id === currentRecipient.id), 1)
            store.setRecipientList(updatedList);
        if (currentRecipient.name === 'Me') {
            store.setAddMe(false)
            }
        }
    }

    const toggleEditMode = (bool) => {
        setEditMode(bool)   
       // hack to set the focus
       if (bool) {
            setTimeout(() => {
                // inputRef.current.value = currentInput;
                inputRef.current.focus();
            }, 200); 
       }
    }

    let mainClass = [classes.EmailDropdown, editMode ? classes['EmailDropdown-focus'] : ''].join(' ')
    let numberBox = useObserver(() => {
        return store.completeInOrder ? <input readOnly={currentRecipient.isLast} type="number" className={classes['EmailDropdown-number']} value={props.value.number ? props.value.number : 1} onChange={onNumberChange}/> : null
    })

    return (
        <div className={mainClass}>
            {numberBox}
            <div className={classes['EmailDropdown-pencil']}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div className={classes['EmailDropdown-inputContainer']} onClick={() => toggleEditMode(true)}>
                {editMode ? 
                    <div className={classes['EmailDropdown-inputContainer__inputBox']}>
                        <input ref={inputRef} type="text" onBlur={() => toggleEditMode(false)} onChange={(event) => onInputChange(event)} value={currentRecipient && currentRecipient.email ? currentRecipient.email : ''} />
                        {/* <div>{users}</div> */}
                    </div>
                    : 
                    <div className={currentRecipient && currentRecipient.email ? classes['EmailDropdown-inputContainer__selectedEmailBox'] : null}>{currentRecipient && currentRecipient.email}</div>
                }
            </div>
            {currentRecipient && currentRecipient.email ? (
                <React.Fragment>
                    <div className={classes['EmailDropdown-authenticationBox']}>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <span>Email</span>
                    </div>
                    <div onClick={removeItem} className={classes['EmailDropdown-x']}><i className="fa fa-times" aria-hidden="true"></i></div>
                </React.Fragment>
            ) : null }
        </div>
    );
}

export default EmailDropdown;