import { Transaction, TransactionCategory } from "@prisma/client";
import { calculateBalance } from "./calculateBalance";

type ByCategoryExpense = {
  category: TransactionCategory;
  percentage: number;
  amount: number;
};

export const calculateExpenseByCategory = (transactions: Transaction[]) => {
  const total = calculateBalance(transactions, "EXPENSE");

  const expensesByCategory = transactions?.reduce(
    (acc: ByCategoryExpense[], transaction) => {
      if (transaction.type === "EXPENSE") {
        const categoryExists = acc.find(
          (expense) => expense.category === transaction.category,
        );

        if (categoryExists) {
          categoryExists.amount += Number(transaction.amount);
          categoryExists.percentage += (categoryExists.amount / total) * 100;
        } else {
          acc.push({
            category: transaction.category,
            amount: Number(transaction.amount),
            percentage: (Number(transaction.amount) / total) * 100,
          });
        }
      }
      return acc;
    },

    [],
  );

  return expensesByCategory;
};
