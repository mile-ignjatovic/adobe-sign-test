import React, {useState, useRef} from 'react';
import classes from './EmailDropdown.module.css';

const EmailDropdown = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [currentInput, setCurrentInput] = useState('');
    let [users, setUsers] = useState([]);

    const inputRef = useRef();

    // filter list of users for dropdown
    const filterUsersForDropdown = (value) => {
        if (props.users) {
            let usersToShow = [...props.users];
            let item = usersToShow.find(el => el.email === value);
            if (item) usersToShow.splice(usersToShow.indexOf(item), 1);
            setUsers(usersToShow);
        }
    }

    const onInputChange = (event) => {
        let value = event.target.value;
        props.inputValue(currentInput, value,( event.key === 'Backspace' || event.key === 'Delete'));
        
        setCurrentInput(value);
        
        filterUsersForDropdown(value);
    }

    const toggleEditMode = (bool) => {
        setEditMode(bool)   
       // hack to set the focus
       if (bool) {
            setTimeout(() => {
                inputRef.current.value = currentInput;
                inputRef.current.focus();
            }, 0); 
       }
    }

    let mainClass = [classes.EmailDropdown, editMode ? classes['EmailDropdown-focus'] : ''].join(' ')

    return (
        <div className={mainClass}>
            {/* number */}
            {props.number ? <div className={classes['EmailDropdown-number']}>{props.number}</div> : null}
            {/* pencil icon */}
            <div className={classes['EmailDropdown-pencil']}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            {/* input or box */}
            <div className={classes['EmailDropdown-inputContainer']} onClick={() => toggleEditMode(true)}>
                {editMode ? 
                    <div className={classes['EmailDropdown-inputContainer__inputBox']}>
                        <input ref={inputRef} type="text" onKeyUp={onInputChange} onBlur={() => toggleEditMode(false)}  />
                        <div>{users}</div>
                    </div>
                    : 
                    <div className={currentInput ? classes['EmailDropdown-inputContainer__selectedEmailBox'] : null}>{currentInput}</div>
                }
            </div>
            {/* authentication */}
            {currentInput ? (
                <React.Fragment>
                    <div className={classes['EmailDropdown-authenticationBox']}>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <span>Email</span>
                    </div>
                    <div onClick={props.removeItem} className={classes['EmailDropdown-x']}><i className="fa fa-times" aria-hidden="true"></i></div>
                </React.Fragment>
            ) : null }
        </div>
    );
}

export default EmailDropdown;