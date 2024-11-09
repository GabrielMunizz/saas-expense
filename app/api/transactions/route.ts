import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const { id } = req.query;

  if (!id) {
    return NextResponse.json(
      { error: "ID não foi fornecido" },
      { status: 404 },
    );
  }

  const userId = id as string;

  try {
    const user = await prisma.transaction.findMany({
      where: { userId },
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
