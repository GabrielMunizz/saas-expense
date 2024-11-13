import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string().trim().min(3),
  amount: z.number().min(1),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(PaymentMethod),
  date: z.date(),
});
