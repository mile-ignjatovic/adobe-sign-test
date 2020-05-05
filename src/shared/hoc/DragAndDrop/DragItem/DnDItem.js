import React from 'react';
import { useDrag } from 'react-dnd'

const DnDItem = ({children}) => {
  const [{isDragging}, drag] = useDrag(
    {
      item: { type: 'row' },
      collect: monitor => ({
          isDragging: !!monitor.isDragging(),
      }),
  }
  )

  return (
    <div
      ref={drag}
    >
      {children}
    </div>
  )
}

export default DnDItem;