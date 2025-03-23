'use client'
import React from 'react'
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { MAX_TOWNHALL_LEVEL } from '../constants/coc';
// import { BASE_URL } from '../constants/paths';
import { Troop } from '../types/coc';

type Props = {
  troops: Troop[] | null;
  townHallLevel: number;
  setTownHallLevel: React.Dispatch<React.SetStateAction<number>>;
}

const VillageProgressForm = ({ troops, townHallLevel, setTownHallLevel }: Props) => {
  // const [village, setVillage] = useState();
  const townHallLevelRange = Array.from({ length: MAX_TOWNHALL_LEVEL }, (_, i) => i + 1);

  // useEffect(() => {
  //   setTownHallLevel(props.townHallLevel)
  // }, [props.townHallLevel])


  const handleChangeTHLevel = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    setTownHallLevel(Number(e.target.value));
    // try {
    //   const res = await fetch(`${BASE_URL}/api/th/${townHallLevel}`, {
    //     method: "GET"
    //   })

      
    // } catch(error) {
    //   console.error(error);
    // }
  }
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
              <BuildingList data={testData} />
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