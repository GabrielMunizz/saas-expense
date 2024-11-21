import React from "react";
import { Transaction } from "@prisma/client";
import DashTransaction from "./DashTransaction/DashTransaction";
import DashTransactionsHeader from "./DashTransactionsHeader/DashTransactionsHeader";

type DashboardTransactionsProps = {
  transactions: Transaction[];
};

const DashboardTransactions = ({
  transactions,
}: DashboardTransactionsProps) => {
  const limitedTransactions = transactions.slice(0, 11);
  return (
    <aside className="flex flex-col items-center justify-start rounded-lg border-2 px-8 py-6">
      <DashTransactionsHeader />
      <hr className="my-4 w-full" />
      <section className="w-full">
        {limitedTransactions.map((transaction) => (
          <DashTransaction key={transaction.id} transaction={transaction} />
        ))}
      </section>
    </aside>
  );
};

export default DashboardTransactions;
