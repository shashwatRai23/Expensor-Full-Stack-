import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/utils/database";

export async function POST(req) {
  try {
    const { email, username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    await User.create({ email, username, password: hashedPassword });
    return NextResponse.json(
      { status: 200 },
      { message: "User created successfully" }
    );
  } catch (e) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error creating user" }
    );
  }
}
