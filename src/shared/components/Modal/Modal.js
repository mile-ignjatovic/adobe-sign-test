import React, {useContext } from 'react';
import classes from './Modal.module.css';
import {AppStoreContext} from '../../../AppStore';
import { useObserver } from 'mobx-react';
import Card from '../Card/Card';

const Modal = (props) => {
    const store = useContext(AppStoreContext);

    let body = useObserver(() => {
        return store.showModal ? 
        <div className={classes.Modal} >
            <div className={classes.backDrop} onClick={() => store.showHideModal(null)}></div>
            <Card styles={{zIndex: '102', backgroundColor: '#fff', width: '60%'}}>
                <div className={classes['Modal-body']}>
                    <i onClick={() => store.showHideModal(null)} 
                        style={{cursor: 'pointer', float: 'right', margin: '.5rem'}}
                        className={'fa fa-close'}></i>
                    <div className={classes['Modal-body__content']}>
                        {store.showModal}
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