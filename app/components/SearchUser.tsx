'use client'
import React, { useState } from 'react';

const SearchUser = () => {

  const [tag, setTag] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://api.clashofclans.com/v1/players/%23${tag}`, {
        method: "GET",
        headers : {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        }
      })
      if(!response.ok){
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
    }catch (error){
      console.error(error);
    }
  }
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
    </>
  )
}

export default SearchUser