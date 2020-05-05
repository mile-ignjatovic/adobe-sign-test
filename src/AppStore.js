import { useLocalStore } from 'mobx-react';
import React from 'react';

export const AppStoreContext = React.createContext();

const AppStoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        showModal: null,
        showHideModal: (body, title) => {
                store.showModal = body ? {body, title} : null;
        },
        filteredAgreements: [],
        setFilteredAgreements: (data) => {
            // TODO: create filter logic
            store.filteredAgreements = store.agreements;
        },
        agreements: [],
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

