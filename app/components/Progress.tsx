'use client'
import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import SearchUser from '../components/SearchUser'
import VillageProgressForm from '../components/VillageProgressForm'
import { Troop } from '../types/coc';

const Progress = () => {

  const [troops, setTroops] = useState<Troop[] | null>(null);
  const [townHallLevel, setTownHallLevel] = useState<number>(1);

  return (
    <>
      <div className="mb-6">
        <Section title="プレイヤータグから適用">
          <SearchUser setTroops={setTroops} setTownHallLevel={setTownHallLevel} />
        </Section>
      </div>
      <div>
        <Section title="進捗状況管理">
          <VillageProgressForm troops={troops} townHallLevel={townHallLevel} setTownHallLevel={setTownHallLevel} />
        </Section>
      </div>
    </>
  )
}

export default Progress