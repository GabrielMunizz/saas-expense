import { z } from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
  nickname: z.string().optional(),
  profileImage: z.string().optional(),
});
