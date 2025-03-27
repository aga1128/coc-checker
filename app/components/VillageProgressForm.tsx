'use client'
import React from 'react'
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';
import { COCData, TownHallData, Troop } from '../types/coc';
import COC_DATA from '../data/coc_data.json';

type Props = {
  troops: Troop[] | null;
  townHallLevel: number;
  setTownHallLevel: React.Dispatch<React.SetStateAction<number>>;
}

const VillageProgressForm = ({ troops, townHallLevel, setTownHallLevel }: Props) => {

  const cocData: COCData = COC_DATA;
  const thData: TownHallData = cocData[`TH${townHallLevel}`];

  const townHallLevelRange = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);

  const handleChangeTHLevel = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    setTownHallLevel(Number(e.target.value));
  }

  return (
    <>
      <div>
        <label htmlFor="townHallLevel">タウンホールレベル</label>
        <select name="townHallLevel" id="townHallLevel" onChange={handleChangeTHLevel}>
          {townHallLevelRange.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      {townHallLevel}
        <form action="">
          <div className="flex">
            <div className="w-1/2">
              <BuildingList data={thData} />
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