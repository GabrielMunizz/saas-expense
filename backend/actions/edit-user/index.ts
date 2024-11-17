"use server";

import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { editProfileSchema } from "./schema";

type EditUserParams = {
  name?: string;
  email: string;
  nickname?: string;
  profileImage?: string | null;
};

const editUserProfile = async (params: EditUserParams) => {
  editProfileSchema.parse(params);
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/sign-out");
  }

  const userId = session.user.id;

  const dataToUpdate: Partial<EditUserParams> = {
    email: params.email,
    ...(params.name?.trim() && { name: params.name }),
    ...(params.nickname?.trim() && { nickname: params.nickname }),
    ...(params.profileImage && { profileImage: params.profileImage }),
  };

  await prisma.user.update({
    where: { id: userId },
    data: dataToUpdate,
  });

  revalidatePath("/profile");
};

export default editUserProfile;
