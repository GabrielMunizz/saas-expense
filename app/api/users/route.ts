import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Nome, email e senha é obrigatórios" },
        { status: 400 },
      );
    }

    const foundUser = await prisma.user.findUnique({
      where: { email },
    });

    if (foundUser) {
      return NextResponse.json(
        { error: "Email já está em uso" },
        { status: 409 },
      );
    }

    await prisma.user.create({
      data: { name, email, password },
    });

    return NextResponse.json({ message: "Usuário criado" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao criar um usuário" },
      { status: 500 },
    );
  }
}
