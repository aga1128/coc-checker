import React from 'react'
import ItemCard from '../components/ItemCard';

type Props = {
  data: {
    name: string;
    kazu: {
        TH15: number;
        TH16: number;
    };
    time: {
        TH15: number;
        TH16: number;
    };
  }[]
}

const BuildingList = ({ data }: Props) => {
  return (
    <>
      <div>Buildings</div>
      {data.map((data) => (
        <ItemCard data={data}/>
      ))}


    </>
  )
}

export default BuildingList