import { Transaction } from "@prisma/client";
import React from "react";
import TransactionPaymentMethod from "../../TransactionPaymentMethod/TransactionPaymentMethod";
import formatDate from "@/utils/formatDate";
import { formatBalance } from "@/utils/formatBalance";
import { transactionTypeColor } from "@/utils/transactionTypeColor";

type DashTransactionProps = {
  transaction: Transaction;
};

const DashTransaction = ({ transaction }: DashTransactionProps) => {
  const amount = formatBalance(Number(transaction.amount));
  const renderAmount =
    transaction.type === "DEPOSIT" ? `+ ${amount}` : `- ${amount}`;
  const colorVariant = transactionTypeColor(transaction.type);
  return (
    <div className="mb-4 flex w-full items-center justify-between">
      <div className="flex items-center justify-start">
        <div className="mr-2 flex items-center justify-center rounded-lg bg-primary p-2">
          <TransactionPaymentMethod
            transaction={transaction}
            classname="hidden"
          />
        </div>
        <div className="ml-2">
          <h2 className="text-sm font-bold">{transaction.name}</h2>
          <p className="text-sm text-muted-foreground">
            {formatDate(transaction.createdAt)}
          </p>
        </div>
      </div>
      <div>
        <h2 className={`font-bold ${colorVariant}`}>{renderAmount}</h2>
      </div>
    </div>
  );
};

export default DashTransaction;
