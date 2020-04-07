import Axios from 'axios-observable';
import { useObserver } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { delay } from 'rxjs/operators';
import classes from './MobxTest.module.css';
import { MobxTestStoreContext } from './MobxTestStore';

const MobxTest = (props) => {

    const [ currentSubs, setSubs ] = useState(null);

    const store = useContext(MobxTestStoreContext)

    useEffect(() => {
        if (!store.storeData[ 0 ]) {
            const sub = Axios.get('http://localhost:3001/persons').pipe(delay(1000)).subscribe(res => {
                store.addNewStoreData(res.data);
            }, err => {
                alert(err.message);
            });
            setSubs(sub);
        }

        return () => {
            if (currentSubs) currentSubs.unsubscribe();
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