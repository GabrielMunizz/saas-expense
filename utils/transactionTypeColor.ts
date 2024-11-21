import { TransactionType } from "@prisma/client";

export const transactionTypeColor = (
  transactionType: TransactionType,
): string => {
  if (transactionType === "DEPOSIT") {
    return "text-green-700";
  }

  if (transactionType === "INVESTMENT") {
    return "";
  }

  return "text-red-700";
};
