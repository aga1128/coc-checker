import React from 'react'
import ItemCard from '../components/ItemCard';
import { TownHallData } from '../types/coc';

type Props = {
  data: TownHallData;
}

const BuildingList = ({ data }: Props) => {
  return (
    <>
      <div>Buildings</div>

      {data.defenses.map((data) => (
        // <div key={data.name}>
        //   name:{data.name}maxCount:{data.maxCount}maxLevel:{data.maxLevel}
        // </div>
        <ItemCard key={data.name} data={data}/>
      ))}
      {/* {data.map((data) => (
        <ItemCard key={data.name} data={data} />
      ))} */}


    </>
  )
}

export default BuildingList