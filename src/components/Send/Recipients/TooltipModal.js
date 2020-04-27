import React from 'react';
// import classes from './TooltipModal.module.css';

const TooltipModal = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'baseline'}}>
            <div><strong>Signing Order</strong></div>
            <div style={{textAlign: "left"}}>
                Control whether recipients are required to sign in the order they are entered, or in any order.
            </div>
            <br></br>
            <div><strong>CC</strong></div>
            <div style={{textAlign: "left"}}>
                Enter a list of email addresses to receive notification when the document has been completed.
            </div>
            <br></br>
            <div><strong>Roles</strong></div>
            <div style={{textAlign: "left"}}>
                In addition to designating recipients as Signers, you can mark them as Approvers or Form Fillers.
            </div>
            <div style={{textAlign: "left"}}>
                Approver: Recipients marked as approvers review and approve the document but they are not required to sign it. They may be required to enter data into fields.
            </div>
            <div style={{textAlign: "left"}}>
                Form Filler: Recipients marked as form fillers are required to enter data into the form fields and submit the document.
            </div>
            <br></br>
            <div><strong>Identity Verification</strong></div>
            <div style={{textAlign: "left"}}>
                Ensure that before recipients can view or sign the document, they have to verify their identity using one of the following methods: Email, Password, Knowledge Based Authentication (KBA), Social Identity, Phone, Adobe Sign Identity, or Government ID.
            </div>
        </div>
    );
}

export default TooltipModal;