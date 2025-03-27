import React from 'react'
import { BuildingData } from '../types/coc'

type Props = {
  data: BuildingData;
}

const ItemCard = ({ data }: Props) => {
  const maxCount = Array.from({ length: data.maxCount }, (_, i) => i + 1);
  const maxLevel = Array.from({ length: data.maxLevel }, (_, i) => i + 1);

  return (
    <>
      <div>
        <div className="flex flex-col">
          <div>name:{data.name}</div>
          <div>maxCount:{data.maxCount}</div>
          <div>maxLevel:{data.maxLevel}</div>
        </div>
        {maxCount.map((count) => (
          <div key={count} className="flex items-center">
            {maxLevel.map((item) => (
              <button key={item} className="flex items-center justify-center w-8 h-8 p-2 border bg-red-300">
                {item}
              </button>
            ))}
          </div>
        ))}

      </div>
    </>
  )
}

export default ItemCard