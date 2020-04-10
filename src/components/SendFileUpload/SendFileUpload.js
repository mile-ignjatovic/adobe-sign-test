import React, { useState } from 'react';
import styles from './SendFileUpload.module.css';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import UploadButton from '../../shared/components/UploadButton/UploadButton';

const SendFileUpload = (props) => {

    //let dragAndDropText = ""
    //let dragAndDropText = "Drag ℰ Drop Files Here";//useState(0)
    let [dragAndDropText, setDragAndDropText] = useState("Drag ℰ Drop Files Here");

    const dropHandler = (ev) => {
        console.log('ITEM: ', ev.dataTransfer.items[0].getAsFile().name);
        setDragAndDropText(dragAndDropText = ev.dataTransfer.items[0].getAsFile().name);
        console.log('D&D text: ', dragAndDropText)
        ev.preventDefault();
    }

    const dragHandler = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className={styles.UploadWindow}>
            <div className={styles.UploadUpper}>
                <SectionTitle>Files</SectionTitle>
                <UploadButton />
            </div>
            <div className={styles.UploadLower} onDrop={(ev) => dropHandler(ev)} onDragOver={(ev) => dragHandler(ev)}>
                <h4>{dragAndDropText}</h4>
            </div>
        </div>
    )
}

export default SendFileUpload;