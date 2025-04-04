'use client'
import React from 'react';
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { THData, Troop } from '../types/coc';

type Props = {
  townHallLevel: number;
  troops: Troop[] | null;
  THData: THData | null;
}

const VillageProgressForm = ({ townHallLevel, troops, THData }: Props) => {
  console.log("data",THData);
  console.log("level",townHallLevel)
  if(THData === null) return

  return (
    <>
      <form action="">
        <div className="flex">
          <div className="w-1/2">
            <BuildingList buildingData={THData} />
          </div>
          <div className="w-1/2">
            <TroopList troops={troops}/>
          </div>
        </div>
      </form>
    </>
  )
}

export default VillageProgressForm