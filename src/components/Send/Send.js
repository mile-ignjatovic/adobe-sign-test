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
                            <Checkbox styles={{marginBottom: '1rem'}} checkboxChange={(value) => console.log('checkboxChange', value)}>Preview & Add Signature Fields</Checkbox>
                            <RouteBox {...props} click={() => console.log('next')}>Next</RouteBox>
                        </div>
                    </div>
                </section>
            </StoreProvider>
    );
}

export default Send;

const RouteBox = (props) => {
    const sendStore = useContext(SendStoreContext);
    
    const handleClick = () => {
        // check if agreement value is valid TODO:
        // else tell why its not valid
        sendStore.setAgreement();
        props.history.push('/manage')
    }
    return <Button click={handleClick}>Next</Button>
}