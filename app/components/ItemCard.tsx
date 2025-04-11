import React, { useState } from 'react';
import Modal from '../components/layouts/Modal';
import ItemLevel from '../components/ItemLevel';
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
            <ItemLevel key={count} maxLevel={maxLevel} />
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ItemCard