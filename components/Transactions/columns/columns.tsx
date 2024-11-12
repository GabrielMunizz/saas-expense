"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import formatDate from "@/utils/formatDate";
import TransactionCategoryBadge from "../TransactionCategoryBadge/TransactionCategoryBadge";
import TransactionPaymentMethod from "../TransactionPaymentMethod/TransactionPaymentMethod";

const CATEGORY_LABELS = {
  HOUSING: "Casa",
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  SALARY: "Salário",
  SUBSCRIPTION: "Assinatura",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
  OTHER: "Outros",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionCategoryBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) => (
      <TransactionPaymentMethod transaction={transaction} />
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Data do lançamento",
    cell: ({ row: { original: transaction } }) =>
      formatDate(transaction.createdAt),
  },
  {
    accessorKey: "amount",
    header: "Quantidade(R$)",
    cell: ({ row: { original: transaction } }) =>
      Number(transaction.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
  },
  {
    accessorKey: "actions",
  },
];
