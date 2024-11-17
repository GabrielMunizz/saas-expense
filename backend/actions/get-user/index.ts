"use server";

import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWihtoutPassword } = user;

  return userWihtoutPassword;
};
