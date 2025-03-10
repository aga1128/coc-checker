'use client'
import React, { useState } from 'react';
import { Player, Troop, HeroEquipment } from '../types/coc';
import { BASE_URL } from '../constants/paths';

//テスト用タグ：#C8ULRCPR #2OCU9LVQ9

type Props = {
  setTroops: React.Dispatch<React.SetStateAction<Troop[] | null>>
}

const SearchUser = ( { setTroops }: Props) => {

  const [playerId, setPlayerId] = useState<string>("");
  const [data, setData] = useState<Player | null>(null);


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(playerId === "") return

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

      const data: Player = await response.json();

      setData(data);
      setTroops(data.troops);
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
    </>
  )
}

export default SearchUser