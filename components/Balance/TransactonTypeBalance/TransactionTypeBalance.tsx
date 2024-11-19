import { cn } from "@/lib/utils";
import React from "react";

type TransactionTypeBalanceProps = {
  total: number;
  children: React.ReactNode;
  classname?: string;
  transactionType: string | undefined;
  onClickFn?: () => void;
};

const TransactionTypeBalance = ({
  total,
  children,
  classname,
  transactionType,
  onClickFn,
}: TransactionTypeBalanceProps) => {
  return (
    <div
      className={`${cn(classname)} cursor-pointer rounded-xl border-2 border-muted p-8 hover:bg-[#0d091f]`}
      onClick={onClickFn}
    >
      <div className="mb-2 flex w-full items-center justify-start">
        {children}
        <h2 className="ml-2 text-muted-foreground">{transactionType}</h2>
      </div>
      <h2 className="text-xl font-bold">R$: {total}</h2>
    </div>
  );
};

export default TransactionTypeBalance;
