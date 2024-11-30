"use server";

import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const deleteTransaction = async (id: string) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!userId) {
    redirect("/api/sign-out");
  }

  if (!id) {
    throw new Error(" Transaction ID not found!");
  }

  await prisma.transaction.delete({
    where: { id },
  });

  await prisma.user.update({
    where: { id: userId },
    data: { transactionCounter: { decrement: 1 } },
  });

  revalidatePath("/transactions");
};

export default deleteTransaction;
