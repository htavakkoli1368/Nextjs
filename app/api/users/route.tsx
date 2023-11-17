import { NextRequest, NextResponse } from "next/server";
import schema from "./schema"

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
   const validation = schema.safeParse(body);
   if (!validation.success) {
      return NextResponse.json(validation.error.errors,{status:485});
   }
   else{
      return NextResponse.json({id:1,name:body.name});       
   }
}
