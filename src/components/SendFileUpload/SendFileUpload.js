import React, { useState } from 'react';
import styles from './SendFileUpload.module.css';

import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import UploadButton from '../../shared/components/UploadButton/UploadButton';

// import JPGsymbol from '../../shared/Assets/JPGsym.png';
// import TXTsymbol from '../../shared/Assets/TXTsym.png';
// import PDFsymbol from '../../shared/Assets/PDFsym.png';
// import PPTsymbol from '../../shared/Assets/PPTsym.png';

import EMPTYsymbol from '../../shared/Assets/EMPTYsym.png';
import JPGsymbolColor from '../../shared/Assets/color/jpg.png';
import TXTsymbolColor from '../../shared/Assets/color/txt.png';
import PDFsymbolColor from '../../shared/Assets/color/pdf.png';
import PPTsymbolColor from '../../shared/Assets/color/ppt.png';

const SendFileUpload = (props) => {

    let [dragAndDropFiles, setDragAndDropFiles] = useState([]);
    let [defaultText, setDefaultText] = useState('Drag and drop files here');
    let fileIcon;

    function setIcon(extension) {
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

    const dropHandler = (ev) => {
        setDefaultText(defaultText = 'Drag more files here');
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {
                    let file = ev.dataTransfer.items[i].getAsFile();
                    let name = file.name;
                    let index = i;
                    let extension = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) || file.name;
                    setDragAndDropFiles(dragAndDropFiles => [...dragAndDropFiles, { name, extension, index }]);
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

    const removeItem = (name, index) => {
        setDragAndDropFiles(dragAndDropFiles => dragAndDropFiles.filter(item => item.name !== name));
        if (dragAndDropFiles.length === 1) {
            setDefaultText(defaultText = 'Drag and drop files here');
        }
        //.find(item=>((item.name === name) && (index === itemIndex))
        //.slice(itemIndex, 1)
    }

    //**************************FILES DRAG OVER EACH OTHER*************************************** */

    const handleFileDrag = (e, i) => {
        e.preventDefault();
        const documentId = e.dataTransfer.getData(i);

        //const doc = document.getElementById(documentId);
        //doc.style.display = "block";
        e.target.style.display = "block";

        //e.target.appendChild(doc);

    }

    const handleFileDrop = (e) => {
        e.preventDefault();
    }

    const handleFileDragStart = (e) => {
        const target = e.target;
        console.log('DRAG START', target)
        e.dataTransfer.setData('documentId', target.id);

        setTimeout(() => {
            target.style.display = "none"
        })
    }

    const handleFileDragOver = (e) => {
        e.stopPropagation();
        e.target.style.display = "block"
    }

    return (
        <div className={styles.UploadWindow}>
            <div className={styles.UploadUpper}>
                <SectionTitle>Files</SectionTitle>
                <UploadButton />
            </div>
            <div className={styles.UploadLower} onDrop={(ev) => dropHandler(ev)}
                onDragOver={(ev) => dragHandler(ev)}

            >
                {dragAndDropFiles.map((item, i) => {
                    return (
                        <div id={i} className={styles.FileRow} key={i}
                        //draggable={true}
                        //onDragStart={(e) => handleFileDragStart(e)}
                        // onDrag={(e) => handleFileDrag(e, i)}
                        //onDragOver={(e) => handleFileDragOver(e)}
                        // onDrop={(e) => handleFileDrop(e)}
                        >
                            <img className={styles.FileIcon} src={setIcon(item.extension)} alt="xx" />
                            <span className={styles.File}>{item.name}</span>
                            <button className={styles.Close} onClick={() => removeItem(item.name, item.index)}>✖</button>
                        </div>
                    )
                })}
                <span className={styles.Default}>{defaultText}</span>
            </div >
        </div >
    )
}

export default SendFileUpload;
