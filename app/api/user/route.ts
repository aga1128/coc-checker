'use server'
import { NextRequest, NextResponse } from 'next/server';
import { Player } from '../../types/coc'

export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url);
  const playerId = searchParams.get('playerId');

  try {
    if(req.method !== "GET") {
      throw new Error("この操作は許可されていないHTTPメソッドです");
    }
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/%23${playerId}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    })
    if(!response.ok){
      throw new Error();
    }
    const data: Player = await response.json();

    return NextResponse.json(data);

  }catch(error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch player data' });
  }
}