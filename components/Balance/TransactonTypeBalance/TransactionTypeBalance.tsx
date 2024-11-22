import { cn } from "@/lib/utils";
import { formatBalance } from "@/utils/formatBalance";
import React from "react";

type TransactionTypeBalanceProps = {
  total: number;
  children: React.ReactNode;
  classname?: string;
  transactionType: string | undefined;
};

const TransactionTypeBalance = ({
  total,
  children,
  classname,
  transactionType,
}: TransactionTypeBalanceProps) => {
  return (
    <div
      className={`${cn(classname)} rounded-xl border-[1px] border-muted p-8`}
    >
      <div className="mb-2 flex w-full items-center justify-start">
        {children}
        <h2 className="ml-2 text-muted-foreground">{transactionType}</h2>
      </div>
      <h2 className="text-xl font-bold">{formatBalance(total)}</h2>
    </div>
  );
};

export default TransactionTypeBalance;
