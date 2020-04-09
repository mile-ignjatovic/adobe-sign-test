import React from 'react';
import styles from './SendFileUpload.module.css';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import UploadButton from '../../shared/components/UploadButton/UploadButton';

const SendFileUpload = (props) => {
    return (
        <div className={styles.UploadWindow}>
            <div className={styles.UploadUpper}>
                <SectionTitle>Files</SectionTitle>
                <UploadButton />
            </div>
            <div className={styles.UploadLower}>
                <h4>Drag ℰ Drop Files Here</h4>
            </div>
        </div>
    )
}

export default SendFileUpload;