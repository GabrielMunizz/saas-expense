"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deleteTransaction = async (id: string) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!id) {
    throw new Error(" Transaction ID not found!");
  }

  await prisma.transaction.delete({
    where: { id },
  });

  revalidatePath("/transactions");
};

export default deleteTransaction;
