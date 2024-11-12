"use client";

import { handleFetchTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {} from "next-auth";
import { DataTable, DateTableLoading } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";

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

  return <DataTable columns={transactionColumns} data={transactions || []} />;
};

export default Transactions;
