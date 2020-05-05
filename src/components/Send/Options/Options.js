import React, {useContext, useState} from 'react';
import classes from './Options.module.css';
import Checkbox from '../../../shared/components/Checkbox/Checkbox';
import TooltipIcon from '../../../shared/components/TooltipIcon/TooltipIcon';
import {AppStoreContext} from '../../../AppStore';
import {SendStoreContext} from '../SendStore';
import NormalInput from '../../../shared/components/NormalInput/NormalInput';
import {deepCopy} from '../../../shared/utils/utils';

const Options = (props) => {

    const appStore = useContext(AppStoreContext);
    const sendStore = useContext(SendStoreContext);

    let [showTimeSelect, setShowTimeSelect] = useState(false);
    let [showPassword, setShowPassword] = useState(false);
    let [showPasswordText, setShowPasswordText] = useState(false);
    let [passwordObj, setPasswordObj] = useState({password: {value: '', error: false}, confirmPassword: {value: '', error: false}});

    const openModal = () => {
        let modalBody = (<ModalBody />);
        appStore.showHideModal(modalBody, 'Options');
    }

    const passwordProtectChange = (value) => {
        setShowPassword(value);
        setPasswordObj({password: {value: '', error: false}, confirmPassword: {value: '', error: false}});
    }

    const setReminderChange = (value) => {
        setShowTimeSelect(value);
    }
    const selectChangeHandler = (value) => {
        sendStore.setReminder(value);
    } 

    const passwordChangeHandler = (flag, value) => {
        let passError = false;
        let confirmError = false;
        passError = !(value === '') && (value.length < 3 || value.length > 32);
        confirmError = passwordObj.password.value !== value;
        let tempPassObj = {
            password: flag === 'pass' ? {value: value, error: passError} : deepCopy(passwordObj.password), 
            confirmPassword: flag === 'confirm' ? {value: value, error: confirmError} : {...deepCopy(passwordObj.confirmPassword), error: value !== passwordObj.confirmPassword.value}
        };    
        setPasswordObj(tempPassObj);
        sendStore.setPasswordProtect(tempPassObj)
    }

    const showPasswordHandler = (value) => {
        setShowPasswordText(value);
    }

    let options = [];
    for (let key in TIME_SELECT_OPTIONS) {
        if (key) {
            options.push(<option key={TIME_SELECT_OPTIONS[key]} value={TIME_SELECT_OPTIONS[key]}>{TIME_SELECT_OPTIONS[key]}</option>)
        }
    }

    return (
        <div className={classes.Options}>
            <div style={{margin: '0 .5rem'}}>
                <div className={classes['Options-title']}>
                    <span style={{fontSize: '1rem'}}>Options</span>
                    <TooltipIcon click={() => openModal()}></TooltipIcon>
                </div>
                <div className={classes['Options-inputBox']}>
                    <Checkbox checkboxChange={(value) => passwordProtectChange(value)}>Password Protect</Checkbox>
                    {showPassword ? <div className={classes['Options-inputBox__password']}>
                        <span>Password must contain from 3 to 32 characters</span>
                        <NormalInput 
                            hasError={passwordObj.password.error} 
                            type={showPasswordText ? 'text' : 'password'} 
                            placeholder='Password' 
                            value={passwordObj.password.value} 
                            onInputChange={(ev) => passwordChangeHandler('pass', ev.target.value)}/>
                        <NormalInput 
                            hasError={passwordObj.confirmPassword.error} 
                            type={showPasswordText ? 'text' : 'password'} 
                            placeholder='Confirm password' 
                            value={passwordObj.confirmPassword.value} 
                            onInputChange={(ev) => passwordChangeHandler('confirm', ev.target.value)}/>
                        <Checkbox 
                            styles={{fontSize: '.6rem', marginTop: '.5rem', display: 'flex', paddingLeft: '.5rem'}} 
                            checkboxChange={(value) => showPasswordHandler(value)}>Show password</Checkbox>
                    </div> : null}
                    <br></br>
                    <Checkbox checkboxChange={(value) => setReminderChange(value)}>Set Reminder</Checkbox>
                    {showTimeSelect ? <select className={classes['Options-inputBox__reminder']} onChange={(ev) => selectChangeHandler(ev.target.value)}>
                        {options}
                    </select> : null}
                </div>
            </div>
        </div>
    );
}

export default Options;

const TIME_SELECT_OPTIONS = {
    DAY: 'Every day',
    WEEK: 'Every week', 
    BUSINESS_DAY: 'Every business day',
    OTHER_DAY: 'Every other day',
    THIRD_DAY: 'Every third day',
    FIFTH_DAY: 'Every fifth day'
}

const ModalBody = () => {
    return (
        <div style={{textAlign: 'left'}}>
            <strong>Password Protect</strong>
            <div>Require recipients to enter a password to open and view the signed PDF file.</div>
            <strong style={{marginTop: '.5rem', display: 'block'}}>Set Reminder</strong>
            <div>Set the frequency of reminders to be sent until the agreement is completed.</div>
        </div>
    )
}