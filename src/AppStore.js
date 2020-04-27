import { useLocalStore } from 'mobx-react';
import React from 'react';

export const AppStoreContext = React.createContext();

const AppStoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        showModal: null,
        showHideModal: (body, title) => {
                store.showModal = body ? {body, title} : null;
        }
    }))

    return (
        <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>
    )
}

export default AppStoreProvider;

