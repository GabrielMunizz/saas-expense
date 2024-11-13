import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Transaction, TransactionType } from "@prisma/client";
import { NewTransactionType } from "../_types/_transactions";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID não foi fornecido" },
      { status: 404 },
    );
  }

  const userId = id;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId },
    });

    if (!transactions) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Um erro inesperado ocorreu" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const {
    name,
    type,
    amount,
    category,
    paymentMethod,
    userId,
  }: NewTransactionType = await req.json();

  if (!userId) {
    return NextResponse.json(
      { error: "UserId não foi fornecido" },
      { status: 404 },
    );
  }

  if (!name || !type || !amount || !category || !paymentMethod) {
    return NextResponse.json(
      { error: "Todos os parâmetros são necessários" },
      { status: 400 },
    );
  }

  try {
    const newTransaction = await prisma.transaction.create({
      data: {
        name,
        type,
        amount,
        category,
        paymentMethod,
        date: new Date(),
        userId,
      },
    });

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Um erro inesperado ocorreu" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID não foi fornecido" },
      { status: 404 },
    );
  }

  try {
    await prisma.transaction.delete({
      where: { id },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Um erro inesperado ocorreu" },
      { status: 500 },
    );
  }
}
