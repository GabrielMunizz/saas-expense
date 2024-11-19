"use client";

import React, { useState } from "react";
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
  const [gridSize, setGridSize] = useState("grid-cols-[2fr_1fr_1fr_1fr]");

  const handleClick = (size: string) => {
    setGridSize(size);
  };
  return (
    <div className={`my-8 grid w-full ${gridSize} gap-8`}>
      <TransactionTypeBalance
        transactionType={formatTransactionType(TransactionType.INVESTMENT)}
        total={3500}
        onClickFn={() => handleClick("grid-cols-[2fr_1fr_1fr_1fr]")}
      >
        <PiggyBank size={28} />
      </TransactionTypeBalance>
      <TransactionTypeBalance
        transactionType={formatTransactionType(TransactionType.DEPOSIT)}
        total={1250}
        onClickFn={() => handleClick("grid-cols-[1fr_2fr_1fr_1fr]")}
      >
        <ChartLineUp className="text-green-700" size={28} />
      </TransactionTypeBalance>
      <TransactionTypeBalance
        transactionType={formatTransactionType(TransactionType.EXPENSE)}
        total={500}
        onClickFn={() => handleClick("grid-cols-[1fr_1fr_2fr_1fr]")}
      >
        <ChartLineDown className="text-red-700" size={28} />
      </TransactionTypeBalance>
      <TransactionTypeBalance
        transactionType={formatTransactionType(TransactionType.LOAN)}
        total={250}
        onClickFn={() => handleClick("grid-cols-[1fr_1fr_1fr_2fr]")}
      >
        <Handshake className="text-orange-700" size={28} />
      </TransactionTypeBalance>
    </div>
  );
};

export default ByTypeBalance;
