'use client'
import React from 'react';
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { COCData, BuildingData, Troop } from '../types/coc';
import COC_DATA from '../data/coc_data.json';
import SelectTHLevel from '../components/SelectTHLevel';

type Props = {
  troops: Troop[] | null;
  townHallLevel: number;
  setTownHallLevel: React.Dispatch<React.SetStateAction<number>>;
}

const VillageProgressForm = ({ troops, townHallLevel, setTownHallLevel }: Props) => {

  const cocData: COCData = COC_DATA;
  const thData: BuildingData = cocData[`TH${townHallLevel}`];

  return (
    <>
      <SelectTHLevel townHallLevel={townHallLevel} setTownHallLevel={setTownHallLevel} />
      <form action="">
        <div className="flex">
          <div className="w-1/2">
            <BuildingList buildingData={thData} />
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