import React, { useContext, useEffect } from 'react';
import EmailDropdown from './EmailDropdown/EmailDropdown';
import { SendStoreContext } from '../../SendStore';
import { useObserver } from 'mobx-react';
import axios from 'axios-observable';

const EmailDropdownList = (props) => {

    const store = useContext(SendStoreContext);
    
    useEffect(() => {
        axios.get('http://localhost:3001/users').subscribe(res => {
            if (res && res.data && res.data.length > 0) {
                store.setDropDownData(res.data);
            }
        })
    }, []);

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