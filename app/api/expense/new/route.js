import { NextResponse } from "next/server";
import AllExpense from "@/models/expense";
import { connectToDatabase } from "@/utils/database";
import User from "@/models/user";
export async function POST(req) {
  try {
    const { name, amount, date, category, user } = await req.json();
    await connectToDatabase();
    // console.log(creator,name,amount,date,category);
    const expense = await AllExpense.create({
      name,
      amount,
      date,
      category,
      user,
    });
    const currUser=await User.findOne({ email: user });
    currUser.expenses.push(expense._id);
    currUser.save();
    console.log(expense);
    return NextResponse.json(
      { status: 201 },
      { message: "Expense added successfully" }
    );
  } catch (e) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error in adding the expense" }
    );
  }
}
