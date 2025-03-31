import React from 'react';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';

type Props = {
  townHallLevel: number,
  setTownHallLevel: React.Dispatch<React.SetStateAction<number>>;
}
const SelectTHLevel = ({ townHallLevel, setTownHallLevel }: Props) => {
  const townHallLevelRange: number[] = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);
  
  const handleChangeTHLevel = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    setTownHallLevel(Number(e.target.value));
  }

  return (
    <div>
      <label htmlFor="townHallLevel">タウンホールレベル</label>
      <select name="townHallLevel" id="townHallLevel" value={townHallLevel} onChange={handleChangeTHLevel}>
        {townHallLevelRange.map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectTHLevel