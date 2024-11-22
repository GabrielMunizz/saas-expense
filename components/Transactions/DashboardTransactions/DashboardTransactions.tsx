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
  const latestTransactions = transactions.slice(0, 11);
  return (
    <aside className="flex flex-col items-center justify-start rounded-lg border-[1px] px-8 py-6">
      <DashTransactionsHeader />
      <hr className="mb-6 mt-4 w-full" />
      {transactions.length !== 0 ? (
        latestTransactions.map((transaction) => (
          <section key={transaction.id} className="w-full">
            <DashTransaction transaction={transaction} />
          </section>
        ))
      ) : (
        <section className="flex h-[60%] w-full items-center justify-center">
          <h2 className="text-xl font-bold">Ainda não possui transações</h2>
        </section>
      )}
    </aside>
  );
};

export default DashboardTransactions;
