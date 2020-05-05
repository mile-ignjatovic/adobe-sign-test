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
        },
        // EmailList dropdown data
        dropDownData: [],
        setDropDownData: data => {
            store.dropDownData = data;
        },
        // Message component
        title: '',
        setTitle: (data) => {
            store.title = data;
        },
        agreementText: '',
        setAgreementText: (data) => {
            store.agreementText = data;
        },
        // Options data
        passwordProtect: false,
        setPasswordProtect: (data) => {
            store.passwordProtect = data && data.password && data.password.value ? data.password.value : store.passwordProtect;
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
            store.recipientList.splice(store.recipientList.findIndex(el => el.name === undefined || el.email === undefined), 1);
            store.agreement = {
                title: store.title ? store.title : store.uploadedFiles && store.uploadedFiles[0] && store.uploadedFiles[0].name ? store.uploadedFiles[0].name : '',
                agreementText: store.agreementText,
                recipients: store.recipientList && [...store.recipientList],
                password: store.passwordProtect,
                reminder: store.reminder,
                files: store.uploadedFiles && [...store.uploadedFiles]
            }
        }
    }))

    return (
        <SendStoreContext.Provider value={store}>{children}</SendStoreContext.Provider>
    )
}

export default StoreProvider;

