import React from 'react'
import ItemCard from '../components/ItemCard';
import { COCData } from '../types/coc';

type Props = {
  data: COCData;
}

const BuildingList = ({ data }: Props) => {
  return (
    <>
      <div>Buildings</div>

      {data.defenses.map((defense) => (

      ))}
      {data.map((data) => (
        <ItemCard key={data.name} data={data} />
      ))}


    </>
  )
}

export default BuildingList