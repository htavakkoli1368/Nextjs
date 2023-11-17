import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
   return NextResponse.json(
     [
        {id:1,name:"hossein"},
        {id:2,name:"saeed"}
     ]
   );
}
export async function POST(request:NextRequest){
   const body = await request.json();
   if (!body.name) {
      return NextResponse.json({error:"invalid"},{status:485});
   }
   else{
      return NextResponse.json({id:1,name:body.name});       
   }
}
