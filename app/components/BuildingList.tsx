import React from 'react';
import CategoryList from '../components/CategoryList';
import HeroList from '../components/HeroList';
import { BuildingData } from '../types/coc';

type Props = {
  buildingData: BuildingData;
}

const BuildingList = ({ buildingData }: Props) => {
  return (
    <>
      <div>Buildings</div>
      <CategoryList name="防衛施設" categoryData={buildingData.defenses} />
      {buildingData.traps && (
        <CategoryList name="罠" categoryData={buildingData.traps} />
      )}
      <CategoryList name="軍事施設" categoryData={buildingData.armies} />
      <CategoryList name="資源施設" categoryData={buildingData.resources} />
      {buildingData.heroes && (
        <HeroList name="ヒーロー" heroesData={buildingData.heroes} />
      )}
    </>
  )
}

export default BuildingList