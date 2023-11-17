import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest,{params}:{params:{id:number}}){
   if(params.id>10){
    return NextResponse.json(      
           {error:"not found"},
           {status:404}        
      )
   }
   else{
   return NextResponse.json(        
           {id:1,name:"hossein"}         
        
      )
   }
}
export async function PUT(request:NextRequest,{params}:{params:{id:number}}){
   const body = await request.json();
   if (!body.name) {
      return NextResponse.json({error:"invalid name"},{status:400});
   }
   if (params.id>10) {
      return NextResponse.json({error:"user not found"},{status:400});
   }    
   return NextResponse.json({id:1,name:body.name});
}
export async function DELETE(request:NextRequest,{params}:{params:{id:number}}){
   const body = await request.json();
   if (params.id>10) {
      return NextResponse.json({error:"user not found"},{status:400});
   }    
   return NextResponse.json({});
}