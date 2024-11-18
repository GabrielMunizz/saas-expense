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

  return (
    <div className="w-[95%]">
      {isLoading ? (
        <DateTableLoading columns={transactionColumns} />
      ) : (
        <DataTable columns={transactionColumns} data={transactions || []} />
      )}
    </div>
  );
};

export default Transactions;
