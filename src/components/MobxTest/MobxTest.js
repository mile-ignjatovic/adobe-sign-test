import { useObserver } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './MobxTest.module.css';
import { MobxTestStoreContext } from './MobxTestStore';
const MobxTest = (props) => {

    const [ currentTimer, setTimer ] = useState(null);

    const store = useContext(MobxTestStoreContext)

    // TODO: test if this is working
    const abortController = new AbortController();
    const { signal } = abortController;

    useEffect(() => {
        // TODO: refactor
        if (!store.storeData[ 0 ]) {
            fetch('http://localhost:3001/persons', { signal }).then(res => {
                res.json().then(data => {
                    let timeout = setTimeout(() => {
                        store.addNewStoreData(data);
                    }, 2000);
                    setTimer(timeout);
                });

            }).catch(err => {
                alert(err.message);
            });
        }

        return () => {
            // TODO: fix abort fetch request 
            abortController.abort();
            clearTimeout(currentTimer);
        }
    }, []);

    const dataList = useObserver(() => {
        return store.storeData && store.storeData ? store.storeData.map(el => <div key={el.id}>name: {el.name}, age: {el.age}</div>) : null;
    })
    return (
        <div className={classes.MobxTest}>
            MobxTest works!
            <br />
            {dataList}
            <br />
            <Link to="/">Go Home</Link>
        </div>

    );
}

export default MobxTest;