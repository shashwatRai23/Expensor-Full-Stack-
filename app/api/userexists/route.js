import User from "@/models/user";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectToDatabase();
    const user = await User.findOne({ email });
    if (user) {
        return NextResponse.json({ message: "User already exists" }, { status: 200 })
    }
    else {
        return NextResponse.json({ message: "User doesn't exist" }, { status: 400 })
    }
  } catch (err) {
    console.log(err);
  }
}
