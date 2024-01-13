import { NextResponse } from "next/server";

export async function GET(req){

    const {searchParams}=new URL(req.url);
    console.log(searchParams);

 return NextResponse.json({"msg":`${searchParams.get("search")}`});
}


export async function POST(req){
    // const res=await req.json();
    

   const formData= await req.formData();

   console.log(formData);

    return NextResponse.json({"msg":`post success`});

}