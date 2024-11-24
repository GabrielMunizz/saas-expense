"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";

export const getTransactions = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
    },
  });

  return transactions;
};
