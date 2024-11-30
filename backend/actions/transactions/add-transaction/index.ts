"use server";

import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addTransactionSchema } from "./schema";
import { addMonths } from "date-fns";

type TransactionParams = {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: PaymentMethod;
  installments: number;
  date: Date;
};

export const addTransaction = async (params: TransactionParams) => {
  addTransactionSchema.parse(params);

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/api/sign-out");
  }

  const userId = session.user.id;

  if (params.installments > 1) {
    const dataToCreate = [];
    const installmentAmount = params.amount / params.installments;

    for (let i = 0; i < params.installments; i += 1) {
      const transactionInstallment: TransactionParams = {
        ...params,
        name: `${params.name} (${i + 1}ª parcela)`,
        amount: installmentAmount,
        date: addMonths(params.date, i),
      };

      dataToCreate.push({ ...transactionInstallment, userId });
    }

    await prisma.transaction.createMany({
      data: dataToCreate,
      skipDuplicates: true,
    });

    await prisma.user.update({
      where: { id: userId },
      data: { transactionCounter: { increment: dataToCreate.length } },
    });
  } else {
    await prisma.transaction.upsert({
      where: {
        id: params.id || "",
      },
      update: {
        ...params,
        userId,
      },
      create: {
        ...params,
        userId,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: { transactionCounter: { increment: 1 } },
    });
  }

  revalidatePath("/transactions");
};
