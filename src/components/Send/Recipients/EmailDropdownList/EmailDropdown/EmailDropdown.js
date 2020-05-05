import React, {useState, useRef, useContext} from 'react';
import classes from './EmailDropdown.module.css';
import { SendStoreContext } from '../../../SendStore';
import { generateId, deepCopy } from '../../../../../shared/utils/utils';
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
        setCurrentRecipient({...currentRecipient, email: value, name: value, isLast: false});

        updateList(value);
        
        // filterUsersForDropdown(value);
    }

    const itemSelected = (el) => {
        let copy = deepCopy(el);
        setCurrentRecipient(copy)
        updateList(copy);
    }

    const updateList = (value) => {
        let updatedList;
        updatedList = [...store.recipientList];
        
        let recipientIndex;
        
        if (typeof(value) === 'string') {
            recipientIndex = updatedList.findIndex(el => currentRecipient && el.id === currentRecipient.id);
            updatedList[recipientIndex] = {...currentRecipient, email: value, name: value, isLast: false};
        } else {
            // if user is in the list return and reset currentRecipient
            if (!!updatedList.find(el => el.email === value.email)) {
                setCurrentRecipient(props.value);
                return;
            };
            updatedList[updatedList.length - 1] = {...value, isLast: false};
        }


        if (!updatedList[recipientIndex + 1]) {
            updatedList.push({id: generateId('list-item'), isLast: true});
        }

        store.setRecipientList(updatedList);
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
            setCurrentRecipient(null)
        if (currentRecipient.name === 'Me') {
            store.setAddMe(false)
            setCurrentRecipient(null)
            }
        }
    }

    const toggleEditMode = (bool) => {
        setTimeout(() => {
        setEditMode(bool)   
       // hack to set the focus
       if (bool) {
                // inputRef.current.value = currentInput;
                inputRef.current.focus();
            }
        }, 200); 
    }

    let mainClass = [classes.EmailDropdown, editMode ? classes['EmailDropdown-focus'] : ''].join(' ')
    let numberBox = useObserver(() => {
        return store.completeInOrder ? <input readOnly={currentRecipient && currentRecipient.isLast} type="number" className={classes['EmailDropdown-number']} value={props.value.number ? props.value.number : 1} onChange={onNumberChange}/> : null
    })

    let dropDownItems = useObserver(() => store.dropDownData.map(el => {
        return <div 
            key={el.id}
            onClick={() => itemSelected(el)}
            style={{paddingLeft: store.completeInOrder ? '16%' : '8%'}} 
            className={classes['dropDown-item']}>
                {el.name}
            </div>
    }));

    return (
            <div style={{position: 'relative'}} className={mainClass}>
                {numberBox}
                <div className={classes['EmailDropdown-pencil']}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div  className={classes['EmailDropdown-inputContainer']} onClick={() => toggleEditMode(true)}>
                    {editMode ? 
                        <div className={classes['EmailDropdown-inputContainer__inputBox']}>
                            <input 
                                ref={inputRef} 
                                type="text" 
                                onBlur={() => toggleEditMode(false)} onChange={(event) => onInputChange(event)} 
                                value={currentRecipient && currentRecipient.email ? currentRecipient.email : ''} />
                        </div>
                        : 
                        <div className={currentRecipient && currentRecipient.email ? classes['EmailDropdown-inputContainer__selectedEmailBox'] : null}>{currentRecipient && (currentRecipient.name || currentRecipient.email)}</div>
                    }
                </div>
                {editMode ? <div className={classes.dropDown}>{dropDownItems}</div> : null}
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