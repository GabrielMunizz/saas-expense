"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";

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

  const { name, email, createdAt, profileImage, nickname, subscription } = user;

  return { name, email, createdAt, profileImage, nickname, subscription };
};
