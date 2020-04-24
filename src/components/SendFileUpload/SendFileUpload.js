import React, { useState } from 'react';
import styles from './SendFileUpload.module.css';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import UploadButton from '../../shared/components/UploadButton/UploadButton';
import { generateId } from '../../shared/utils/utils';

import EMPTYsymbol from '../../shared/Assets/EMPTYsym.png';
import JPGsymbolColor from '../../shared/Assets/color/jpg.png';
import TXTsymbolColor from '../../shared/Assets/color/txt.png';
import PDFsymbolColor from '../../shared/Assets/color/pdf.png';
import PPTsymbolColor from '../../shared/Assets/color/ppt.png';

const SendFileUpload = (props) => {

    let [uploadedFiles, setUploadedFiles] = useState([]);
    let [defaultText, setDefaultText] = useState('Drag and drop files here');
    let fileIcon;

    const setIcon = (extension) => {
        switch (extension) {
            case 'txt':
                fileIcon = TXTsymbolColor;
                break;
            case 'jpg':
                fileIcon = JPGsymbolColor;
                break;
            case 'pdf':
                fileIcon = PDFsymbolColor;
                break;
            case 'ppt':
                fileIcon = PPTsymbolColor;
                break;
            case 'pptx':
                fileIcon = PPTsymbolColor;
                break;
            default:
                fileIcon = EMPTYsymbol;
        }
        return fileIcon;
    };

    const createFile = (index, name, idNumber) => {
        let newFile = {
            index: index,
            name: name,
            extension: name.substring(name.lastIndexOf('.') + 1, name.length) || name,
            id: generateId(idNumber)
        };
        return newFile;
    };

    const dropHandler = (ev) => {
        setDefaultText(defaultText = 'Drag more files here');
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {
                    let file = ev.dataTransfer.items[i].getAsFile();
                    let newFile = createFile(i, file.name, i);
                    setUploadedFiles(uploadedFiles => [...uploadedFiles, newFile]);
                }
            }
        }
        else {
            for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('Items[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            }
        }
    };

    const dragHandler = (ev) => {
        ev.preventDefault();
    };

    const removeItem = (id) => {
        setUploadedFiles(uploadedFiles => uploadedFiles.filter(item => item.id !== id));
        if (uploadedFiles.length === 1) {
            setDefaultText(defaultText = 'Drag and drop files here');
        }
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setUploadedFiles(uploadedFiles => arrayMove(uploadedFiles, oldIndex, newIndex));
    };

    const addUploadedFile = (fileName) => {
        let newFile = createFile(uploadedFiles.length + 1, fileName, uploadedFiles.length + 1);
        setUploadedFiles(uploadedFiles => [...uploadedFiles, newFile]);
    };

    const SortableItem = SortableElement(({ value }) => <li tabIndex={0} className={styles.ListItem}>{value}</li>);

    const SortableList = SortableContainer(({ items }) => {
        return (
            <ul className={styles.UnorderedList}>
                {items.map((item, i) => (
                    <SortableItem key={`item-${item}`} index={i} value={
                        <div id={i} className={styles.FileRow}>
                            <img className={styles.FileIcon} src={setIcon(item.extension)} alt="xx" />
                            <span className={styles.File}>{item.name}</span>
                            <button className={styles.Close} onClick={() => removeItem(item.id)}>✖</button>
                        </div>
                    } />
                ))}
            </ul>
        )
    });

    return (
        <div className={styles.UploadWindow}>
            <div className={styles.UploadUpper}>
                <SectionTitle>Files</SectionTitle>
                <UploadButton addUploadedFile={addUploadedFile} />
            </div>
            <div className={styles.UploadLower} onDrop={(ev) => dropHandler(ev)}
                onDragOver={(ev) => dragHandler(ev)}>
                <div>
                    <SortableList items={uploadedFiles} onSortEnd={onSortEnd} />
                    <span className={styles.Default}>{defaultText}</span>
                </div>
            </div>
        </div>
    )
}

export default SendFileUpload;