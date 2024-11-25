import { Transaction } from "@prisma/client";
import formatDate from "./formatDate";
import { TRANSACTION_TYPE_OPTIONS } from "@/app/_constants/_transactionConstants";

export const filterByDate = (
  transactions: Transaction[] | undefined,
  month: string,
) => {
  if (month !== "Todas as transações") {
    const shortMonth = month.slice(0, 3).toLowerCase();
    const filteredTransactions = transactions?.filter((transaction) =>
      formatDate(transaction.date).includes(shortMonth),
    );
    return filteredTransactions;
  }

  return transactions;
};

export const filterByType = (
  transactions: Transaction[] | undefined,
  type: string,
) => {
  if (type !== "Todos") {
    const findType = TRANSACTION_TYPE_OPTIONS.find(
      (transactionType) => transactionType.label === type,
    );
    return transactions?.filter(
      (transaction) => transaction.type === findType?.value,
    );
  }

  return transactions;
};
