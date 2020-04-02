import { useLocalStore } from 'mobx-react';
import React from 'react';

export const MobxTestStoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        storeData: [],
        addNewStoreData: data => {
            store.storeData.push(...data);
        }
    }))

    return (
        <MobxTestStoreContext.Provider value={store}>{children}</MobxTestStoreContext.Provider>
    )
}

export default StoreProvider;