import React from 'react';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';

type Props = {
  townHallLevel: number,
  handleSetTownHallLevel: (level: number) => Promise<void>;
}
const SelectTHLevel = ({ townHallLevel, handleSetTownHallLevel }: Props) => {
  const townHallLevelRange: number[] = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);
  
  const handleChangeTHLevel = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSetTownHallLevel(Number(e.target.value));
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