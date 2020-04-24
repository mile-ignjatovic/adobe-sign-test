import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios-observable';
import EmailDropdown from './EmailDropdown/EmailDropdown';
import { SendStoreContext } from '../../SendStore';
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

    let emailList = useObserver(() => {
        return store.recipientList && store.recipientList.map(el => {
            return <EmailDropdown
                   key={el.id}
                   value={el}
               />
            }
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