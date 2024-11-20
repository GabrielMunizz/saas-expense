import React from "react";
import ByCategoryExpense from "./ByCategoryExpense/ByCategoryExpense";
import { getTransactions } from "@/backend/actions/transactions/get-transactions";
import { calculateExpenseByCategory } from "@/utils/calculateExpenseByCategory";
import { CATEGORY_LABELS } from "@/app/_constants/_transactionConstants";

const ExpensesByCategory = async () => {
  const transactions = await getTransactions();
  const byExpense = calculateExpenseByCategory(transactions);

  return (
    <section className="w-full rounded-lg border-2 border-muted px-8 py-6">
      <div>
        <h2 className="text-lg font-bold">Gastos por categoria</h2>
      </div>
      <hr className="my-4" />
      <div>
        {byExpense.map((expense) => (
          <ByCategoryExpense
            key={expense.category}
            title={CATEGORY_LABELS[expense.category]}
            amount={expense.amount}
            percentage={expense.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpensesByCategory;
