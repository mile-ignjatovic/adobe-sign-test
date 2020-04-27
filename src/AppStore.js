import { useLocalStore } from 'mobx-react';
import React from 'react';

export const AppStoreContext = React.createContext();

const AppStoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        showModal: null,
        showHideModal: (cmp) => {
            store.showModal = cmp;
        }
    }))

    return (
        <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>
    )
}

export default AppStoreProvider;

