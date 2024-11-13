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

type TransactionParams = {
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

  await prisma.transaction.create({
    data: { ...params, userId },
  });
};
