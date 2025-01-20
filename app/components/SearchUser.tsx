'use client'
import React, { useState } from 'react';
import { Player, Troop, HeroEquipment } from '../types/coc';
import { BASE_URL } from '../constants/paths';

//テスト用タグ：#C8ULRCPR #2OCU9LVQ9

const SearchUser = () => {

  const [playerId, setPlayerId] = useState<string>("");
  const [data, setData] = useState<Player | null>(null);


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/players/${encodeURIComponent(playerId)}`, {
        method: "GET",
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(!response.ok) {
        throw new Error()
      }

      const data = await response.json();

      setData(data);
    }catch(error){
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#********"
          value={playerId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayerId(e.target.value)}
        />
        <button type="submit">
          検索する
        </button>
      </form>
      {data && (
        <div className="flex w-full gap-8">
          <div>
            <div>name: {data.name}</div>
            <div>townHall: {data.townHallLevel}</div>
          </div>
          <div>
            <div className="text-xl">HeroEquipment</div>
            {data.heroEquipment.map((data: HeroEquipment) => (
              <div key={data.name}>
                {data.name}:{data.level}
              </div>
            ))}
          </div>
          <div>
            <div className="text-xl">troops</div>
            {data.troops.filter((obj: Troop) => obj.village === "home").map((data: Troop) => (
              <div key={data.name}>
                {data.name}:{data.level}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SearchUser