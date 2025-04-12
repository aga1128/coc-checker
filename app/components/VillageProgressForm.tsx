'use client'
import React from 'react';
import BuildingList from '../components/BuildingList';
import TroopList from '../components/TroopList';
import { THData, Troop } from '../types/coc';

type Props = {
  troops: Troop[] | null;
  THData: THData | null;
}

const VillageProgressForm = ({ troops, THData }: Props) => {

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{

    }catch(error){
      console.error(error);
    }
  }
  if(THData === null) return

  return (
    <>
      <form onSubmit={handleRegister}>
        <div className="flex">
          <div className="w-1/2">
            <BuildingList buildingData={THData} />
          </div>
          <div className="w-1/2">
            <TroopList troops={troops}/>
          </div>
        </div>
        <button type="submit">登録する</button>
      </form>
    </>
  )
}

export default VillageProgressForm