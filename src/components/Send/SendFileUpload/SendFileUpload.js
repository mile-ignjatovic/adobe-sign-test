import React, { useState, useContext, useRef } from 'react';
import classes from './SendFileUpload.module.css';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import Button from '../../../shared/components/Button/Button';
import { generateId } from '../../../shared/utils/utils';

import EMPTYsymbol from '../../../shared/Assets/EMPTYsym.png';
import JPGsymbolColor from '../../../shared/Assets/color/jpg.png';
import TXTsymbolColor from '../../../shared/Assets/color/txt.png';
import PDFsymbolColor from '../../../shared/Assets/color/pdf.png';
import PPTsymbolColor from '../../../shared/Assets/color/ppt.png';

import {SendStoreContext} from '../SendStore';

const SendFileUpload = (props) => {

    const sendStore = useContext(SendStoreContext);
    const fileUploadRef = useRef();

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

    const checkIfFileIsSupported = (fileName) => {
        let flag = false;
        const FILE_TYPES = {
            TXT: 'txt', JPG: 'jpg', JPEG: 'jpeg', PDF: 'pdf', PPT: 'ppt', PPTX: 'pptx', DOCX: 'docx', DOC: 'doc'
        };
        for (let key in FILE_TYPES) {
            if (fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) === FILE_TYPES[key]) {
                flag = true; 
                return flag;    
            }
        }
        return flag;
    }

    const dropHandler = (ev) => {
        setDefaultText(defaultText = 'Drag more files here or click to browse');
        ev.preventDefault();
        let fileList = [...uploadedFiles]
        if (ev.dataTransfer.items) {
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {                   
                    let file = ev.dataTransfer.items[i].getAsFile();
                    if (checkIfFileIsSupported(file.name)) {
                        let newFile = createFile(i, file.name, i);
                        setUploadedFiles(uploadedFiles => [...uploadedFiles, newFile]);
                        fileList.push(newFile);
                    }
                }
            }
        }
        sendStore.setUploadedFiles(fileList);
    };

    const dragHandler = (ev) => {
        ev.preventDefault();
    };

    const removeItem = (id) => {
        let tempUploadedFiles = [...uploadedFiles].filter(item => item.id !== id);
        setUploadedFiles(tempUploadedFiles);
        sendStore.setUploadedFiles(tempUploadedFiles);
        if (uploadedFiles.length === 1) {
            setDefaultText(defaultText = 'Drag and drop files here');
        }
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setUploadedFiles(uploadedFiles => arrayMove(uploadedFiles, oldIndex, newIndex));
    };

    const addUploadedFile = (event) => {
        let file = event.target && event.target.files && event.target.files.item(0) && event.target.files.item(0).name;
        if (!!file) {
            if (checkIfFileIsSupported(file)) {
            let newFile = createFile(uploadedFiles.length + 1, file, uploadedFiles.length + 1);
            let fileList = [...uploadedFiles, newFile];
                setUploadedFiles(uploadedFiles => [...uploadedFiles, newFile]);
                sendStore.setUploadedFiles(fileList);
            }
        }
    };

    const SortableItem = SortableElement(({ value }) => <li tabIndex={0} className={classes.ListItem}>{value}</li>);

    const SortableList = SortableContainer(({ items }) => {
        if (items && items.length > 0) {
            return (
                <ul className={classes.UnorderedList}>
                    {items.map((item, i) => (
                        <SortableItem key={`item-${item}`} index={i} value={
                            <div id={i} className={classes.FileRow}>
                                <img className={classes.FileIcon} src={setIcon(item.extension)} alt="xx" />
                                <span className={classes.File}>{item.name}</span>
                                <button className={classes.Close} onClick={() => removeItem(item.id)}>✖</button>
                            </div>
                        } />
                    ))}
                </ul>
            )
        }
        return null;
    });

    const addFileBtnHandler = () => {
        fileUploadRef.current.click();
    }

    return (
        <div className={classes.UploadWindow}>
            <div className={classes.UploadUpper}>
                <SectionTitle>Files</SectionTitle>
                <Button styles={{marginTop: '1rem', marginBottom: '.2rem'}} type='link' click={addFileBtnHandler}>Add File</Button>
            </div>
            {uploadedFiles && uploadedFiles.length > 0 ? <div className={classes.listBox}>
                <SortableList items={uploadedFiles} onSortEnd={onSortEnd} />
            </div>:null}
            <div 
                style={{height: uploadedFiles && uploadedFiles.length > 0 ? '4.5rem' : '7rem'}} 
                className={classes.UploadLower} onDrop={(ev) => dropHandler(ev)}
                onDragOver={(ev) => dragHandler(ev)}>
                <span className={classes.Default}>{defaultText}</span>
                <input ref={fileUploadRef} className={classes.uploadInput} type="file"
                    onChange={(ev) => addUploadedFile(ev)} />
            </div>
        </div>
    )
}

export default SendFileUpload;