import React, { useEffect, useState } from 'react';
import Modal from '../components/layouts/Modal';
import ItemLevel from '../components/ItemLevel';
import { CategoryData } from '../types/coc';

type Props = {
  data: CategoryData;
}

const ItemCard = ({ data }: Props) => {
  const [levels, setLevels] = useState<(number| null)[]>(Array.from({ length: data.maxCount }, () => null));
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const maxCount = Array.from({ length: data.maxCount }, (_, i) => i + 1);
  const maxLevel = Array.from({ length: data.maxLevel }, (_, i) => i + 1);

  useEffect(() => {
    setLevels((prev: (number | null)[]) => {
      const diff: number = data.maxCount - prev.length;
      if(diff > 0) {
        return [...prev, ...Array.from({ length: diff }, () => null)];
      }else if(diff < 0) {
        return prev.slice(0, data.maxCount);
      }else {
        return prev
      }
    });
  }, [data]);

  useEffect(() => {
    const allSelected: boolean = levels.every((level) => level !== null);
    setCompleted(allSelected);
  },[levels])


  const handleSetValue = (count: number, level: number) => {
    setLevels((prev) => {
      const newLevels = [...prev];
      newLevels[count - 1] = level;
      return newLevels;
    })
  }

  return (
    <>
      <div
        className={`flex items-center p-4 mb-2 border rounded cursor-pointer ${isCompleted && "bg-sub-color border-2 border-black"}`}
        onClick={() => setOpen(true)}
      >
        <div>image</div>
        <div>{data.name}</div>
      </div>

      <Modal isOpen={isOpen} setter={setOpen} title={data.name}>
        <div className="flex flex-col gap-4">
          {maxCount.map((count) => (
            <ItemLevel key={count} maxLevel={maxLevel} selectedLevel={levels[count - 1]} count={count} setLevel={handleSetValue} />
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ItemCard