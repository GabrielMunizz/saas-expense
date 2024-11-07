import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/_lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
        { status: 400 },
      );
    }

    const foundUser = await prisma.user.findUnique({
      where: { email },
    });

    if (foundUser) {
      return NextResponse.json(
        { error: "Email is already in use" },
        { status: 409 },
      );
    }

    await prisma.user.create({
      data: { name, email, password },
    });

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
