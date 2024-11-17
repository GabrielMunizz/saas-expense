"use client";

import { handleFetchTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {} from "next-auth";
import { DataTable, DateTableLoading } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";

import AddTransaction from "./AddTransaction/AddTransaction";

type TransactionProps = {
  userId: string;
};

const Transactions = ({ userId }: TransactionProps) => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => handleFetchTransactions(userId),
  });

  return (
    <div className="flex w-full flex-col items-center p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">Transações</h1>
        <AddTransaction />
      </div>
      <div className="w-[95%]">
        {isLoading ? (
          <DateTableLoading columns={transactionColumns} />
        ) : (
          <DataTable columns={transactionColumns} data={transactions || []} />
        )}
      </div>
    </div>
  );
};

export default Transactions;
