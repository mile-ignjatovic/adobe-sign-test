import React from 'react';
// import classes from './DragItem.module.css';

const DragItem = (props) => {

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('item-id', target.id);
        e.dataTransfer.setData('can-move', props.enabled);
        if (props.enabled) {
            if (e.dataTransfer.dropEffect === 'move') {
            setTimeout(() => {
                    target.style.display = 'none';
                }, 0);
            }
        }
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return ( 
        <div 
            id={props.id}
            draggable
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
}

export default DragItem;