import { Transaction, TransactionType } from "@prisma/client";

export const calculateBalance = (
  transactions: Transaction[],
  transactionType: TransactionType,
): number => {
  const filteredTransactionsByType = transactions.filter(
    (transaction) => transaction.type === transactionType,
  );
  const transactionsBalacance = filteredTransactionsByType.reduce(
    (acc, transaction) => {
      const balance = acc + Number(transaction.amount);

      return balance;
    },
    0,
  );

  return Number(transactionsBalacance.toFixed(2));
};
