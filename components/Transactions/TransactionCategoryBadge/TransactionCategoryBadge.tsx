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
    <Badge variant="secondary" className="text-green-700">
      Depósito
    </Badge>
  ) : transaction.type === TransactionType.EXPENSE ? (
    <Badge variant="secondary" className="text-red-700">
      Despesa
    </Badge>
  ) : transaction.type === TransactionType.INVESTMENT ? (
    <Badge variant="secondary" className="text-gray-300">
      Investimento
    </Badge>
  ) : (
    <Badge variant="secondary" className="text-orange-600">
      Empréstimo
    </Badge>
  );
};

export default TransactionCategoryBadge;
