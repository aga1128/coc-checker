import { getCoCDataByTHLevel } from "@/app/utils/firestore/functions";
import { NextRequest, NextResponse } from "next/server";


export async function GET (req: NextRequest, { params }: { params: Promise<{ level: number }> }) {
  const { level } = await params;
  try {
    if(req.method !== "GET") {
      throw new Error("この操作は許可されていないHTTPメソッドです");
    }
    const THLevel: string = "TH"+ level
    const data = await getCoCDataByTHLevel(THLevel);
    
    return NextResponse.json(data);
  }catch(error){
    console.error(error);
    return NextResponse.json({ error: '指定のタウンホールレベルデータの取得に失敗しました' });
  }
}