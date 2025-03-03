'use client'
import React, { useState } from 'react'
import Buildings from '../components/Buildings';
import Troops from '../components/Troops';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';

const VillageProgressList = () => {
  const [townHallLevel, setTownHallLevel] = useState<number>(1);
  const townHallLevelRange = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);
  
  return (
    <>
      <div>
        <label htmlFor="townHallLevel">タウンホールレベル</label>
        <select name="townHallLevel" id="townHallLevel">
          {townHallLevelRange.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Buildings />
        </div>
        <div className="w-1/2">
          <Troops />
        </div>
      </div>
    </>
  )
}

export default VillageProgressList