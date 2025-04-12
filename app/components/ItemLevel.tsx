import React from 'react';

type Props = {
  maxLevel: number[];
  selectedLevel: number | null;
  count: number;
  setLevel: (count: number, level: number) => void;
}

const ItemLevel = ({ maxLevel, selectedLevel, count, setLevel }: Props) => {

  return (
    <>
      <div className="flex">
        {maxLevel.map((level) => (
          <button 
            key={level} 
            onClick={()=> setLevel(count, level)}
            className={`flex items-center justify-center w-8 h-8 p-2 border ${selectedLevel === level ? "bg-green-300" : "bg-red-300"} `}
          >
            {level}
          </button>
        ))}
      </div>
    </>
  )
}

export default ItemLevel