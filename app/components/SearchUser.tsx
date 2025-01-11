'use client'
import React, { useState } from 'react';
import { BASE_URL } from '../constants/paths';

type Player = {
  name: string;
  townHallLevel: string;
  heroEquipment: string[];
  troops: string[];
} | null

const SearchUser = () => {

  const [tag, setTag] = useState<string>("");
  const [data, setData] = useState<Player>(null);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/user?playerId=${tag}`, {
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
  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="********"
          value={tag}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value)}
        />
        <button type="submit">
          検索する
        </button>
      </form>

      <div className="flex w-full gap-8">
        <div>
          <div>name: {data?.name}</div>
          <div>townHall: {data?.townHallLevel}</div>
        </div>
        <div>
          <div className="text-xl">HeroEquipment</div>
          {data?.heroEquipment.map((data: any) => (
            <div key={data.name}>
              {data.name}:{data.level}
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl">troops</div>
          {data?.troops.filter((obj: any) => obj.village === "home").map((data: any) => (
            <div key={data.name}>
              {data.name}:{data.level}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchUser