'use client'
import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import SearchUser from '../components/SearchUser'
import VillageProgressForm from '../components/VillageProgressForm'
import { Troop } from '../types/coc';
import COC_DATA from '../data/coc_data.json';


type BuildingData = {
  max_count: number;
  max_level: number;
};

// 各防衛施設、罠、軍事施設、資源施設、ヒーローの型
type DefenseType = Record<string, BuildingData>;
type TrapType = Record<string, BuildingData>;
type ArmyType = Record<string, BuildingData>;
type ResourceType = Record<string, BuildingData>;
type HeroType = Record<string, { max_level: number }>;

// 各タウンホールレベルの型
type TownHallData = {
  defenses: DefenseType;
  traps?: TrapType;
  armies: ArmyType;
  resources: ResourceType;
  heroes?: HeroType;
};

type COCData = Record<string, TownHallData>;

const Progress = () => {

  const [troops, setTroops] = useState<Troop[] | null>(null);
  const [townHallLevel, setTownHallLevel] = useState<number>(1);

  const coc: COCData = COC_DATA;
  console.log(coc[`TH${townHallLevel}`]);
  const handleSetTHLevel = async(townHallLevel: number) => {

  }

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