"use client";

import { handleFetchTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {} from "next-auth";
import { DataTable, DateTableLoading } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";
import SelectInput from "../Select/SelectInput";
import {
  MONTHS,
  TRANSACTION_TYPE_OPTIONS,
} from "@/app/_constants/_transactionConstants";
import { useState } from "react";
import { filterByDate, filterByType } from "@/utils/transactionFilters";
import MonthTabs from "./MonthTabs/MonthTabs";

type TransactionProps = {
  userId: string;
};

const Transactions = ({ userId }: TransactionProps) => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => handleFetchTransactions(userId),
  });

  const mapedTypes = TRANSACTION_TYPE_OPTIONS.map((option) => option.label);
  const typeOptions = ["Todos", ...mapedTypes];

  const monthOptions = ["Todas as transações", ...MONTHS];
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]);
  const [selectedType, setSelectedType] = useState(typeOptions[0]);

  const filteredTrans = filterByDate(transactions, selectedMonth);
  const displayedTransaction = filterByType(filteredTrans, selectedType);

  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <MonthTabs setFn={setSelectedMonth} months={monthOptions} />
        <div className="flex items-center justify-start">
          <h2 className="mr-2 text-muted-foreground">Filtrar por tipo:</h2>
          <SelectInput
            className="border-0 text-muted-foreground"
            defaultValue={typeOptions[0]}
            selectOptions={typeOptions}
            setFn={setSelectedType}
          />
        </div>
      </div>
      <div className="w-full">
        {isLoading ? (
          <DateTableLoading columns={transactionColumns} />
        ) : (
          <DataTable
            columns={transactionColumns}
            data={displayedTransaction || []}
          />
        )}
      </div>
    </main>
  );
};

export default Transactions;
