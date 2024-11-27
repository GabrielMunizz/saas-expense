"use client";

import React, { useState } from "react";
import Balance from "../Balance/Balance";
import BalanceChart from "../Balance/BalanceChart/BalanceChart";
import ByTypeBalance from "../Balance/ByTypeBalance/ByTypeBalance";
import ExpensesByCategory from "./ExpensesByCategory/ExpensesByCategory";
import DashboardTransactions from "./DashboardTransactions/DashboardTransactions";
import { handleFetchTransactions } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { filterByDate } from "@/utils/transactionFilters";
import { MONTHS } from "@/app/_constants/_transactionConstants";
import { calculateBalance } from "@/utils/calculateBalance";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import { TailSpin } from "react-loader-spinner";

type DashboardProps = {
  userId: string | undefined;
};

const Dashboard = ({ userId }: DashboardProps) => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => handleFetchTransactions(userId!),
  });

  const currentMonth = new Date().getMonth();
  const monthOptions = ["Todas as transações", ...MONTHS];
  const [selectedMonth, setSelectedMonth] = useState(
    monthOptions[currentMonth + 1],
  );

  const thisMonthTransactions = filterByDate(transactions, selectedMonth);

  const deposits = calculateBalance(thisMonthTransactions!, "DEPOSIT");
  const investments = calculateBalance(thisMonthTransactions!, "INVESTMENT");
  const expenses = calculateBalance(thisMonthTransactions!, "EXPENSE");
  const loans = calculateBalance(thisMonthTransactions!, "LOAN");

  const balanceData = {
    deposits,
    investments,
    expenses,
    loans,
  };

  return isLoading ? (
    <div className="flex h-[50%] w-full items-center justify-center">
      <TailSpin color="#ffffff" width={50} height={50} />
    </div>
  ) : (
    <>
      <DashboardHeader
        monthOptions={monthOptions}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
        transactions={thisMonthTransactions!}
      />
      <section className="grid w-[90%] grid-cols-[2fr_1fr] gap-16">
        <section className="flex flex-col items-center justify-start">
          <Balance transactions={thisMonthTransactions} />
          <ByTypeBalance transactions={thisMonthTransactions!} />
          <div className="grid w-full grid-cols-[1.3fr_2.12fr] gap-9">
            <BalanceChart
              balanceData={balanceData}
              currentMonth={selectedMonth}
            />
            <ExpensesByCategory transactions={thisMonthTransactions!} />
          </div>
        </section>
        <DashboardTransactions transactions={thisMonthTransactions!} />
      </section>
    </>
  );
};

export default Dashboard;
