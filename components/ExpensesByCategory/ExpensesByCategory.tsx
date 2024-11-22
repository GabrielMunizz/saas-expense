import React from "react";
import ByCategoryExpense from "./ByCategoryExpense/ByCategoryExpense";
import { calculateExpenseByCategory } from "@/utils/calculateExpenseByCategory";
import { CATEGORY_LABELS } from "@/app/_constants/_transactionConstants";
import { Transaction } from "@prisma/client";

type ExpensesByCategoryProps = {
  transactions: Transaction[];
};

const ExpensesByCategory = ({ transactions }: ExpensesByCategoryProps) => {
  const byExpense = calculateExpenseByCategory(transactions);
  const gridSelector = byExpense.length > 5 ? "grid-cols-2" : "";

  return (
    <section className="h-[433px] w-full rounded-lg border-2 border-muted px-8 py-6">
      <div>
        <h2 className="text-lg font-bold">Gastos por categoria</h2>
      </div>
      <hr className="my-4" />
      <div className={`grid ${gridSelector} gap-x-8`}>
        {byExpense.length !== 0 ? (
          byExpense.map((expense) => (
            <ByCategoryExpense
              key={expense.category}
              title={CATEGORY_LABELS[expense.category]}
              amount={expense.amount}
              percentage={expense.percentage}
            />
          ))
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="mt-10 text-xl font-bold">Sem gastos</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpensesByCategory;
