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

  const testData2 = [
    {
      id: 1,
      name: '大砲',
      category: 'building',
      details: {
        1: {
          maxBuilding: 2,
          upgradeTime: 50,
          maxLevel: 1,
        }
      }
    },
    {
      id: 2,
      name: 'アーチャータワー',
      category: 'building',
      details: {
        2: {
          maxBuilding: 1,
          upgradeTime: 70,
          maxLevel: 1,
        },
        3: {
          maxBuilding: 1,
          upgradeTime: 70,
          maxLevel: 1,
        }
      }
    }
  ]

  const testData3 = [
    {
      townHallLevel: 1,
      cannon: {
        maxLevel: 2,
        maxQuantity: 1,
      },
      archerTower: {
        maxLevel: 1,
        maxQuantity: 1,
      }
    },
    {
      townHallLevel: 2,
      cannon: {
        maxLevel: 3,
        maxQuantity: 2
      },
      archerTower: {
        maxLevel: 2,
        maxQuantity: 3
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