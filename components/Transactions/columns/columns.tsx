"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import formatDate from "@/utils/formatDate";
import TransactionCategoryBadge from "../TransactionCategoryBadge/TransactionCategoryBadge";
import TransactionPaymentMethod from "../TransactionPaymentMethod/TransactionPaymentMethod";
import EditTransaction from "../EditTransaction/EditTransaction";
import { CATEGORY_LABELS } from "@/app/_constants/_transactionConstants";

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
    header: "Editar/Apagar",

    cell: ({ row: { original: transaction } }) => (
      <EditTransaction transaction={transaction} />
    ),
  },
];
