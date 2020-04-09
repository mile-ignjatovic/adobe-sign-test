import React from 'react';

import styles from './UploadButton.module.css';

const UploadButton = (props) => {

    return (
        <label className={styles.textBtn}>
            <input className={styles.Input} type="file" />
                        Add files
        </label>
    )
}

export default UploadButton;