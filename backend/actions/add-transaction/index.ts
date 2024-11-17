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
    redirect("/api/sign-out");
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
