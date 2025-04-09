'use client'
import React, { useEffect, useState } from 'react';
import Section from '../components/layouts/Section';
import SearchUser from '../components/SearchUser';
import SelectTHLevel from '../components/SelectTHLevel';
import VillageProgressForm from '../components/VillageProgressForm';
import { THData, Troop } from '../types/coc';
import { BASE_URL } from '../constants/paths';


const Progress = () => {

  const [townHallLevel, setTownHallLevel] = useState<number>(1);
  const [troops, setTroops] = useState<Troop[] | null>(null);
  const [THData, setTHData] = useState<THData | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`${BASE_URL}/api/th-levels/${townHallLevel}`, {
          method: "GET"
        })

        if(!response.ok) {
          throw new Error()
        }
        const data: THData = await response.json();
        setTHData(data);
        console.log(data);
      }catch(error){
        console.error(error)
      }
    }

    fetchData();
  }, [])

  const handleSetTownHallLevel = async(level: number) => {
    setTownHallLevel(level);
    try {
      const response = await fetch(`${BASE_URL}/api/th-levels/${level}`, {
        method: "GET"
      })

      if(!response.ok) {
        throw new Error()
      }
      const data: THData = await response.json();
      setTHData(data);
    }catch(error){
      console.error(error);
    }
  }

  return (
    <>
      <div className="mb-6">
        <Section title="プレイヤータグから適用">
          <SearchUser setTroops={setTroops} handleSetTownHallLevel={handleSetTownHallLevel} />
        </Section>
      </div>
      <div>
        <Section title="進捗状況管理">
          <SelectTHLevel townHallLevel={townHallLevel} handleSetTownHallLevel={handleSetTownHallLevel} />
          <VillageProgressForm troops={troops} THData={THData} />
        </Section>
      </div>
    </>
  )
}

export default Progress