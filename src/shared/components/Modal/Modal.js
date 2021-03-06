import React, {useContext } from 'react';
import classes from './Modal.module.css';
import {AppStoreContext} from '../../../AppStore';
import { useObserver } from 'mobx-react';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';

const Modal = (props) => {
    const store = useContext(AppStoreContext);

    let body = useObserver(() => {
        return store.showModal ? 
        <div className={classes.Modal} >
            <div className={classes.backDrop} onClick={() => store.showHideModal(null)}></div>
            <Card styles={{zIndex: '102', backgroundColor: '#fff', width: '60%'}}>
                <i onClick={() => store.showHideModal(null)} 
                    style={{cursor: 'pointer', marginLeft: 'auto'}}
                    className={'fa fa-close'}></i>
                {store.showModal.title ? <React.Fragment>
                    <SectionTitle>{store.showModal.title}</SectionTitle>
                    <div style={{borderBottom: 'var(--normalBorder)'}}></div>
                </React.Fragment> : null}
                <div className={classes['Modal-body']}>
                    <div className={classes['Modal-body__content']}>
                        {store.showModal && store.showModal.body}
                    </div>
                </div>
            </Card>
        </div> 
    : null
    })

    return (
        <React.Fragment>
           {body}
        </React.Fragment>
    );
}

export default Modal;