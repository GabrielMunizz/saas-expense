"use server";

import { editProfileSchema } from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type EditUserParams = {
  name?: string;
  email: string;
  nickname?: string;
  profileImage?: string;
};

const editUserProfile = async (params: EditUserParams) => {
  editProfileSchema.parse(params);
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const dataToUpdate: Partial<EditUserParams> = {
    email: params.email,
    ...(params.name?.trim() && { name: params.name }),
    ...(params.nickname?.trim() && { nickname: params.nickname }),
    ...(params.profileImage?.trim() && { profileImage: params.profileImage }),
  };

  await prisma.user.update({
    where: { id: userId },
    data: dataToUpdate,
  });

  revalidatePath("/profile");
};

export default editUserProfile;