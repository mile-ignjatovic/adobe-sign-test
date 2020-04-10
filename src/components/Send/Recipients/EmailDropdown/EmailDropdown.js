import React, {useState, useEffect} from 'react';
import classes from './EmailDropdown.module.css';
import NormalInput from '../../../../shared/components/NormalInput/NormalInput';
import axios from 'axios-observable';

const EmailDropdown = (props) => {

    // TODO: use mobx for state
    const [inputVal, setInputVal] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [debounce, setMyDebounce] = useState(null);
    const [showList, setShowList] = useState(false);
    
    const callBeForUsersList = (query) => {
        axios.get('http://localhost:3001/users' + (query ? '?name=' + query : '')).subscribe(res => {
                if (res && res.data && res.data.length > 0) {
                    setShowList(true);
                    setUsers(res.data);
                }
        });
    }

    const onInputChangeHandler = (event) => {
        let val = event.target.value;
        setInputVal(val);
        if (val === '') {
            setUsers([]);
        }
        if (val && val !== '') {
        clearTimeout(debounce);
            let debounceTimeout = setTimeout(() => {
                callBeForUsersList(val)
            }, 500)
            setMyDebounce(debounceTimeout);
        }
    }

    const selectElement = (el) => {
        let tempSU = [...selectedUsers]
        tempSU.push(el);
        setSelectedUsers(tempSU);
        
        setInputVal('');
        
        setShowList(false);
    }

    let options = users ? users.map(el => {
    return (<div onClick={() => {selectElement(el)}} key={el.id} >{el.email}</div>)
    }) : null;


    let items = selectedUsers.length > 0 ? selectedUsers.map((user, index) => {
       return (<div key={user.id} className={classes.EmailDropdown} style={{borderBottom: 'none'}}>
        <div className={classes['EmailDropdown-sideBox']} style={{borderRight: 'none'}}>
            {index + 1}
        </div>
        <div className={classes['EmailDropdown-sideBox']} style={{borderRight: 'none'}}>
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div style={{position: 'relative', width: '100%'}}>
            <NormalInput size="100%" value={user.email} backgroundColor="#eee"/>
            <div className={classes['EmailDropdown-list']} style={{display: showList ? 'block':'none'}}>
                {options}
            </div>
        </div>
    </div>)
    }) : null;

    return (
        <section>
            {items}
            <div className={classes.EmailDropdown}>
                <div className={classes['EmailDropdown-sideBox']} style={{borderRight: 'none'}}>
                    {selectedUsers.length > 0 ? selectedUsers.length + 1 : '1'}
                </div>
                <div 
                    className={classes['EmailDropdown-sideBox']}>
                    <i class="fa fa-pencil" aria-hidden="true" style={{marginRight: '.2rem'}}></i>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div style={{position: 'relative', width: '100%'}}>
                    <NormalInput hideBorderLeft size="100%" value={inputVal} backgroundColor="#eee" onInputChange={onInputChangeHandler}/>
                    <div className={classes['EmailDropdown-list']} style={{display: showList ? 'block':'none'}}>
                        {options}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmailDropdown;