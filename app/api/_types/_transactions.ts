import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";

export type NewTransactionType = {
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: PaymentMethod;
  date?: Date;
  userId: string;
};
