import React from 'react';
// import classes from './DragTarget.module.css';

const DragTarget = (props) => {
    const drop = e => {
        const canMove = e.dataTransfer.getData('can-move');
        e.preventDefault();
        if (canMove === 'true') {
            const itemId = e.dataTransfer.getData('item-id');
            const item = document.getElementById(itemId);
            
            item.style.display = 'block';
            alert(e.nativeEvent.target.children[0].firstChild)
            e.target.appendChild(item);
            for (let i = 0; i < e.nativeEvent.target.children.length; i++) {
                e.nativeEvent.target.children[i].firstChild.firstChild.innerHTML = i + 1;
            }
        }
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div 
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    );
}

export default DragTarget;