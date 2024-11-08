import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const allTransactions = await prisma.transaction.findMany({});

    return NextResponse.json({ data: allTransactions }, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json(
      { error: "Um erro inesperado aconteceu" },
      { status: 500 },
    );
  }
}
