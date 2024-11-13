"use client";

import { handleFetchTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {} from "next-auth";
import { DataTable, DateTableLoading } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";

import AddTransactionDrawer from "./AddTransactionDrawer/AddTransactionDrawer";

type TransactionProps = {
  userId: string;
};

const Transactions = ({ userId }: TransactionProps) => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => handleFetchTransactions(userId),
  });

  if (isLoading) {
    return <DateTableLoading columns={transactionColumns} />;
  }

  return (
    <div className="w-full p-6">
      <div className="mb-6 flex justify-end">
        <AddTransactionDrawer />
      </div>
      <DataTable columns={transactionColumns} data={transactions || []} />
    </div>
  );
};

export default Transactions;
