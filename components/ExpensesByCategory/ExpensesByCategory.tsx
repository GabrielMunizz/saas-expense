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

  return (
    <section className="h-[433px] w-full rounded-lg border-2 border-muted px-8 py-6">
      <div>
        <h2 className="text-lg font-bold">Gastos por categoria</h2>
      </div>
      <hr className="my-4" />
      {byExpense.length !== 0 ? (
        byExpense.map((expense) => (
          <div key={expense.category} className="grid grid-cols-2 gap-x-8">
            <ByCategoryExpense
              title={CATEGORY_LABELS[expense.category]}
              amount={expense.amount}
              percentage={expense.percentage}
            />
          </div>
        ))
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="mt-10 text-xl font-bold">Sem gastos</h2>
        </div>
      )}
    </section>
  );
};

export default ExpensesByCategory;
