"use server";

import { addTransactionSchema } from "./schema";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import { authOptions } from "@/backend/authentication/auth";
import { revalidatePath } from "next/cache";

type TransactionParams = {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: PaymentMethod;
  date: Date;
};

export const addTransaction = async (params: TransactionParams) => {
  addTransactionSchema.parse(params);

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

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

  revalidatePath("/transactions");
};
