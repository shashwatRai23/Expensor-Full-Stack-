import AllExpense from "@/models/expense";
import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectToDatabase } from "@/utils/database";
export async function POST(req){
    try{
        const {user}=await req.json();
        await connectToDatabase();
        // console.log(user);
        const expenses=await AllExpense.find({user:user});
        // console.log(expenses);
        return NextResponse.json({expenses},{status:200});
    }
    catch(e)
    {
        return NextResponse.json({status:500},{message:"Error in fetching expenses"});
    }
}