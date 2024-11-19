"use client";

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

const ByTypeBalance = () => {
  return (
    <div className="my-8 w-full">
      <div className="grid w-full grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.INVESTMENT)}
          total={3500}
        >
          <PiggyBank size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.DEPOSIT)}
          total={1250}
        >
          <ChartLineUp className="text-green-700" size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.EXPENSE)}
          total={500}
        >
          <ChartLineDown className="text-red-700" size={28} />
        </TransactionTypeBalance>
        <TransactionTypeBalance
          transactionType={formatTransactionType(TransactionType.LOAN)}
          total={250}
        >
          <Handshake className="text-orange-700" size={28} />
        </TransactionTypeBalance>
      </div>
    </div>
  );
};

export default ByTypeBalance;
