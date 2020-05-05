import React from 'react';
import { useDrop } from 'react-dnd'

const DnDTarget = (props) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'row',
        drop: (drop) => alert('drop', drop),
        canDrop: (canDrop) => {return canDrop.type === 'row'},
        collect: monitor => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        }),
      })
    return (
        <div>{props.children}</div>
    );
}

export default DnDTarget;