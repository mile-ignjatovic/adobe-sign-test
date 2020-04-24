import React from 'react';

import styles from './UploadButton.module.css';

const UploadButton = (props) => {

    return (
        <label className={styles.textBtn}>
            <input className={styles.Input} type="file" id="uploadedFile"
                onChange={() => props.addUploadedFile(document.getElementById("uploadedFile").files.item(0).name)} />
                        Add files
        </label>
    )
}

export default UploadButton;