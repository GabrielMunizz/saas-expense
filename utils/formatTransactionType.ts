import { TRANSACTION_TYPE_OPTIONS } from "@/app/_constants/_transactionConstants";
import { TransactionType } from "@prisma/client";

export const formatTransactionType = (transactionType: TransactionType) => {
  return TRANSACTION_TYPE_OPTIONS.find(
    (transactionTypeOption) => transactionTypeOption.value === transactionType,
  )?.label;
};
