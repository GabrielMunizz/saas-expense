import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "O email não foi fornecido" },
      { status: 400 },
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email as string },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Um erro inesperado ocorreu" },
      { status: 500 },
    );
  }
}

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

    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: { name, email, password: hashedPass },
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
