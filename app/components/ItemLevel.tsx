import React from 'react';

type Props = {
  maxLevel: number[];
}

const ItemLevel = ({ maxLevel }: Props) => {
  return (
    <>
      {maxLevel.map((level) => (
        <button 
          key={level} 
          className="flex items-center justify-center w-8 h-8 p-2 border bg-red-300"
        >
          {level}
        </button>
      ))}
    </>
  )
}

export default ItemLevel