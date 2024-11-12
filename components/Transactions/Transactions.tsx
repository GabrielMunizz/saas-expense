"use client";

import {} from "next-auth";
import { DataTable } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";
import { useQuery } from "@tanstack/react-query";
import { handleFetchTransactions } from "@/services";
import { Transaction } from "@prisma/client";

type TransactionProps = {
  userId: string;
};

const Transactions = ({ userId }: TransactionProps) => {
  const transactionsQuery = useQuery({
    queryKey: ["transactions"],
    queryFn: () => handleFetchTransactions(userId),
  });
  const transactions = transactionsQuery.data as Transaction[];

  return <DataTable columns={transactionColumns} data={transactions} />;
};

export default Transactions;
