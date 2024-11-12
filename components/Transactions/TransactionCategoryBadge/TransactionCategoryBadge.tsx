import { Transaction, TransactionType } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import React from "react";

type TransactionCategoryTypeProps = {
  transaction: Transaction;
};

const TransactionCategoryBadge = ({
  transaction,
}: TransactionCategoryTypeProps) => {
  return transaction.type === TransactionType.DEPOSIT ? (
    <Badge
      variant="secondary"
      className="bg-green-900 bg-opacity-40 text-green-500"
    >
      Depósito
    </Badge>
  ) : transaction.type === TransactionType.EXPENSE ? (
    <Badge
      variant="secondary"
      className="bg-red-900 bg-opacity-40 text-red-500"
    >
      Despesa
    </Badge>
  ) : transaction.type === TransactionType.INVESTMENT ? (
    <Badge
      variant="secondary"
      className="bg-yellow-300 bg-opacity-40 text-yellow-500"
    >
      Investimento
    </Badge>
  ) : (
    <Badge
      variant="secondary"
      className="bg-orange-900 bg-opacity-40 text-orange-500"
    >
      Empréstimo
    </Badge>
  );
};

export default TransactionCategoryBadge;
