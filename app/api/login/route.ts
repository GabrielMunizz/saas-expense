import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 },
      );
    }

    const foundUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "User not registered" },
        { status: 404 },
      );
    }

    if (password !== foundUser?.password) {
      return NextResponse.json({ error: "Wrong password!" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
