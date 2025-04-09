import React, { useState } from 'react';
import Modal from '../components/layouts/Modal';
import { CategoryData } from '../types/coc';

type Props = {
  data: CategoryData;
}

const ItemCard = ({ data }: Props) => {
  const [click, setClick] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const maxCount = Array.from({ length: data.maxCount }, (_, i) => i + 1);
  const maxLevel = Array.from({ length: data.maxLevel }, (_, i) => i + 1);

  const handleClick = () => {
    setClick(prev => {
      return !prev
    })
    console.log(click)
  }

  return (
    <>
      <div className="flex border rounded cursor-pointer" onClick={() => setOpen(true)}>
        <div>image</div>
        <div>{data.name}</div>
      </div>

      <Modal isOpen={isOpen} setter={setOpen} title={data.name}>
        <div>
          {maxCount.map((count) => (
            <div key={count} className="flex items-center">
              {maxLevel.map((level) => (
                <button 
                  key={level} 
                  onClick={handleClick}
                  className="flex items-center justify-center w-8 h-8 p-2 border bg-red-300"
                >
                  {level}
                </button>
              ))}
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ItemCard