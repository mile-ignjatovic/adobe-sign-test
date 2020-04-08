import React, {useState, useEffect} from 'react';
import classes from './EmailDropdown.module.css';
import NormalInput from '../../../../shared/components/NormalInput/NormalInput';
import axios from 'axios-observable';

const EmailDropdown = (props) => {

    // TODO: finish this

    // TODO: use mobx for state
    const [inputVal, setInputVal] = useState('');
    const [users, setUsers] = useState([]);
    const [debounce, setMyDebounce] = useState(null);
    const [inputInFocus, setInputInFocus] = useState(null);

    useEffect(() => {
        if (!users || users.length === 0) {
            callBeForUsersList()
        }
    }, [users])
    
    const callBeForUsersList = (query) => {
        axios.get('http://localhost:3001/users' + (query ? '?name=' + query : '')).subscribe(res => {
            setUsers(res.data);
        })
    }

    const onInputChangeHandler = (event) => {
        let val = event.target.value;   
        setInputVal(val) 
        clearTimeout(debounce);
        let debounceTimeout = setTimeout(() => {
            callBeForUsersList(val)
        }, 500)
        setMyDebounce(debounceTimeout);
    }

    let options = users ? users.map(el => {
    return (<div onClick={() => setInputVal(el.email)} key={el.id} >{el.email}</div>)
    }) : null
    return (
        <div className={classes.EmailDropdown}>
            <NormalInput value={inputVal} backgroundColor="#eee" onInputChange={onInputChangeHandler}/>
            <div className={classes['EmailDropdown-list']} style={{display: inputVal && inputVal !== '' ? 'block':'none'}}>
                {options}
            </div>
        </div>
    );
}

export default EmailDropdown;