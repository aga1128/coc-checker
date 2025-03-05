import React from 'react'

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
  }
}

const ItemCard = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        {data.name}: {data.kazu.TH15}: {data.time.TH15}
      </div>
    </>
  )
}

export default ItemCard