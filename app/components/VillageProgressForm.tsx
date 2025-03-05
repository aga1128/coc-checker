'use client'
import React, { useState } from 'react'
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';

const VillageProgressForm = () => {
  const [townHallLevel, setTownHallLevel] = useState<number>(1);
  const townHallLevelRange = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);

  const testData = [
    {
      name: "Cannon",
      kazu: {
        TH15: 5,
        TH16: 6
      },
      time: {
        TH15: 50,
        TH16: 60
      }
    },
    {
      name: "Tower",
      kazu: {
        TH15: 6,
        TH16: 8
      },
      time: {
        TH15: 120,
        TH16: 140
      }
    }
  ]


  return (
    <>
      <div>
        <label htmlFor="townHallLevel">タウンホールレベル</label>
        <select name="townHallLevel" id="townHallLevel" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTownHallLevel(Number(e.target.value))}>
          {townHallLevelRange.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      {townHallLevel}
        <form action="">
          <div className="flex">
            <div className="w-1/2">
              <BuildingList data={testData} />
            </div>
            <div className="w-1/2">
              <TroopList />
            </div>
          </div>
        </form>
    </>
  )
}

export default VillageProgressForm