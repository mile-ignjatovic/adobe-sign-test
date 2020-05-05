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
            console.log('copyArr', data);
            let copyArr = data.map((el, index) => {
                el.number = index + 1;
                return deepCopy(el)
            });
            store.recipientList = copyArr;
        },
        // EmailList dropdown data
        dropDownData: [],
        setDropDownData: data => {
            store.dropDownData = data;
        },
        // Message component
        agreementName: '',
        setAgreementName: (data) => {
            store.agreementName = data;
        },
        agreementText: '',
        setAgreementText: (data) => {
            store.agreementText = data;
        },
        // Options data
        passwordProtect: false,
        setPasswordProtect: (data) => {
            store.passwordProtect = data;
        },
        reminder: null,
        setReminder: (data) => {
            store.reminder = data;
        },
        // File upload
        uploadedFiles: null,
        setUploadedFiles: (files) => {
            store.uploadedFiles = files;
        },
        // final agreement
        agreement: null,
        setAgreement: () => {
            // TODO: check this. its not ok
            console.log('list', store.recipientList);
            // store.recipientList.splice(store.recipientList.findIndex(el => el.name === undefined || el.email === undefined), 1);
            store.agreement = {
                name: store.agreementName,
                text: store.agreementText,
                completeInOrder: store.completeInOrder,
                recipients: store.recipientList,
                password: store.passwordProtect,
                reminder: store.reminder,
                files: store.files
            }
            console.log('sotore agrement', store.agreement);
        }
    }))

    return (
        <SendStoreContext.Provider value={store}>{children}</SendStoreContext.Provider>
    )
}

export default StoreProvider;

