import { connectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB=async()=>{
    await connectDB();
}

LoadDB();

export async function GET(request){
    const todos=await TodoModel.find({});
    return NextResponse.json({todos:todos});
}

export async function POST(request){
    const {title,description}=await request.json();
    await TodoModel.create({
        title,description
    });

    return NextResponse.json({msg:"Post method hitt"});
}



export async function DELETE(request){
    const mongoId=await request.nextUrl.searchParams.get('mongoId')
    await TodoModel.findByIdAndDelete(mongoId);

    return NextResponse.json({msg:"Del method hitt"});
}


export async function PUT(request){
    const mongoId=await request.nextUrl.searchParams.get('mongoId')
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted: true 
        }
    });

    return NextResponse.json({msg:"put method hitt"});
}