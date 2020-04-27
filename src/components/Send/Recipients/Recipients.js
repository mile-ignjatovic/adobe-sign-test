import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import classes from './Recipients.module.css';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Toggle from '../../../shared/components/Toggle/Toggle';
import Button from '../../../shared/components/Button/Button';
import EmailDropdownList from './EmailDropdownList/EmailDropdownList';
import { SendStoreContext } from './../SendStore';
import { AppStoreContext } from './../../../AppStore';
import { generateId } from '../../../shared/utils/utils';
import TooltipModal from './TooltipModal';

const Recipients = (props) => {

    const sendStore = useContext(SendStoreContext);
    const appStore = useContext(AppStoreContext);

    const toggleHandler = (ev) => {
        sendStore.setCompleteInOrder(ev)
    }

    const addMeToList = () => {
        sendStore.setAddMe()
        let updatedList = [...sendStore.recipientList];
        if (!sendStore.addMe) {
            sendStore.setAddMe(true)
            let me = {id: generateId('list-item'), email: 'me@test.com', name: 'Me'};
            if (updatedList.length === 1) {
                updatedList.unshift(me);
                sendStore.setRecipientList(updatedList);
            } else if (updatedList.length > 1) {
                updatedList.splice(updatedList.length - 1, 0, me);
                sendStore.setRecipientList(updatedList);
            }
        } else {
            sendStore.setAddMe(false)
            updatedList.splice(updatedList.findIndex(el => el.name === 'Me'), 1);
            sendStore.setRecipientList(updatedList);
        }
    }

    // TODO: make modal body for this instance
    const openTooltip = () => {
        let modalContent = (<TooltipModal />)
        appStore.showHideModal(modalContent, 'Recipients')
    }

    let addMeBtn = useObserver(() => {
        return <Button link click={() => addMeToList()}>{!sendStore.addMe ? 'Add me' : ''}</Button>
    })

    let toolTipClass = [classes.tooltip, 'fa fa-question'].join(' ');
    
    return (
        <div className={classes['Recipients']}>
            <SectionTitle>Recipients</SectionTitle>
            <div className={classes['Recipients-header']}>
                <Toggle 
                    toggleOptions={['Complete in order', 'Complete in Any Order']} 
                    toggle={(event) => toggleHandler(event)} />
                    <div className={classes['Recipients-buttons']}>
                        {addMeBtn}
                        <span style={{margin: '0 .5rem', color: 'rgb(0,0,0,.5)'}}>|</span>
                        <span><i onClick={openTooltip} className={toolTipClass} aria-hidden="true"></i></span>
                    </div>
            </div>
            <EmailDropdownList/>
            <Button link>Show CC</Button>
        </div>
    );
}

export default Recipients;