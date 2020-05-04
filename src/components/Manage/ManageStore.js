import { useLocalStore } from 'mobx-react';
import React from 'react';
  
function createData(dataSet) {
  let {recipients, title, modified} = dataSet;
    return { recipients, title, modified };
}
  
const rows = [
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
    createData({recipients: 'test@test.com',title: 'title1', modified: '12/12/2020'}),
];

export const ManageStoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        // TODO: connect this data with the output of SendStore.js agreements
        tableDataSet: rows,
        setTableDataSet: data => store.tableDataSet = data,
    }))

    return (
        <ManageStoreContext.Provider value={store}>{children}</ManageStoreContext.Provider>
    )
}

export default StoreProvider;

