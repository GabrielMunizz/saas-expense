import React from "react";
import TransactionTypeBalance from "../TransactonTypeBalance/TransactionTypeBalance";
import { formatTransactionType } from "@/utils/formatTransactionType";
import { TransactionType } from "@prisma/client";
import {
  ChartLineDown,
  ChartLineUp,
  Handshake,
  PiggyBank,
} from "@phosphor-icons/react/dist/ssr";
import { getTransactions } from "@/backend/actions/transactions/get-transactions";
import { calculateBalance } from "@/utils/calculateBalance";

const ByTypeBalance = async () => {
  const transactions = await getTransactions();

  const revenue = calculateBalance(transactions, "DEPOSIT");
  const expenses = calculateBalance(transactions, "EXPENSE");
  const investments = calculateBalance(transactions, "INVESTMENT");
  const loans = calculateBalance(transactions, "LOAN");

  return (
    <div className="my-8 w-full">
      <div className="grid w-full grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.INVESTMENT)}
          total={investments}
          classname="bg-[#0d091f]"
        >
          <PiggyBank size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.DEPOSIT)}
          total={revenue}
        >
          <ChartLineUp className="text-green-700" size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.EXPENSE)}
          total={expenses}
        >
          <ChartLineDown className="text-red-700" size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.LOAN)}
          total={loans}
        >
          <Handshake className="text-orange-700" size={28} />
        </TransactionTypeBalance>
      </div>
    </div>
  );
};

export default ByTypeBalance;
