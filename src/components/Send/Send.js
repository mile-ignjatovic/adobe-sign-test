import React, {useContext} from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import SendFileUpload from './SendFileUpload/SendFileUpload'
import Message from './Message/Message';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import StoreProvider, {SendStoreContext} from './SendStore';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Options from './Options/Options';
import Button from '../../shared/components/Button/Button';
import {AppStoreContext} from '../../AppStore';
import { useObserver } from 'mobx-react';

const Send = (props) => {

    return (
            <StoreProvider>
                <section className={classes.Send}>
                    <Recipients></Recipients>
                    <div className={classes['Send-message']}>
                        <SectionTitle>Message</SectionTitle>
                        <div style={{display: 'flex'}}>
                            <div className={classes.firstBox}>
                                <Message />
                                <SendFileUpload />
                            </div>
                            <div className={classes.secondBox}>
                                <Options></Options>
                            </div>
                        </div>
                        <div style={{marginTop: '2rem'}}>
                            <Checkbox styles={{marginBottom: '1rem'}} checkboxChange={(value) => alert('checkboxChange', value)}>Preview & Add Signature Fields</Checkbox>
                            <RouteBox {...props}>Next</RouteBox>
                        </div>
                    </div>
                </section>
            </StoreProvider>
    );
}

export default Send;

const RouteBox = (props) => {
    const appStore = useContext(AppStoreContext);
    const sendStore = useContext(SendStoreContext);
    
    const handleClick = () => {
        sendStore.setAgreement();

        let agreement = {...sendStore.agreement, modified: new Date().toDateString()};
        let tempAgreements = [...appStore.agreements];

        tempAgreements.push(agreement);

        appStore.setAgreements(tempAgreements);
        setTimeout(() => props.history.push('/manage#in-progress'), 200)
    }

    let button = useObserver(() => {
        return <Button disabled={!((sendStore.uploadedFiles && sendStore.uploadedFiles.length > 0) && (sendStore.recipientList && sendStore.recipientList.length > 1) )} click={handleClick}>Next</Button>
    });
    return button
}