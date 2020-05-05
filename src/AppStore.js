import { useLocalStore } from 'mobx-react';
import React from 'react';

export const AppStoreContext = React.createContext();

const AppStoreProvider = ({ children }) => {
    let mockAgreement = {
        title: 'test title',
        agreementText: 'test agreement text',
        recipients: [{name: 'test name', email: 'test@test.com'}],
        password: false,
        reminder: null,
        files: null,
        modified: new Date().toDateString()
    }
    const store = useLocalStore(() => ({
        showModal: null,
        showHideModal: (body, title) => {
                store.showModal = body ? {body, title} : null;
        },
        filteredAgreements: [mockAgreement],
        setFilteredAgreements: (data) => {
            // TODO: create filter logic
            store.filteredAgreements = store.agreements;
        },
        agreements: [mockAgreement],
        setAgreements: (data) => {
            store.agreements = data;
            // TODO: create filter logic
            store.filteredAgreements = data;
        }
    }))

    return (
        <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>
    )
}

export default AppStoreProvider;

