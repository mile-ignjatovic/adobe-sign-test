import React from 'react';
import classes from './Send.module.css';
import Recipients from './Recipients/Recipients';
import SendFileUpload from './SendFileUpload/SendFileUpload'
import Message from './Message/Message';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import StoreProvider from './SendStore';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Button from '../../shared/components/Button/Button';
import Options from './Options/Options';

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
                            <Button click={() => console.log('next')}>Next</Button>
                        </div>
                    </div>
                </section>
            </StoreProvider>
    );
}

export default Send;