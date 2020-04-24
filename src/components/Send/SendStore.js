import { useLocalStore } from 'mobx-react';
import React from 'react';
import { generateId, deepCopy } from './../../shared/utils/utils';

export const SendStoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        // Recipient cmp
        addMe: false,
        setAddMe: data => store.addMe = data,
        completeInOrder: false,
        setCompleteInOrder: data => store.completeInOrder = data,
        // EmailDropDownList cmp
        recipientList: [{id: generateId('list-item')}],
        setRecipientList: data => {
            let copyArr = data.map((el, index) => {
                el.number = index + 1;
                return deepCopy(el)
            });
            store.recipientList = copyArr;
        }
    }))

    return (
        <SendStoreContext.Provider value={store}>{children}</SendStoreContext.Provider>
    )
}

export default StoreProvider;

