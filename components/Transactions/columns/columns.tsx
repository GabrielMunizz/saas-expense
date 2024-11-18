"use client";

import { CATEGORY_LABELS } from "@/app/_constants/_transactionConstants";
import formatDate from "@/utils/formatDate";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import EditTransaction from "../EditTransaction/EditTransaction";
import TransactionCategoryBadge from "../TransactionCategoryBadge/TransactionCategoryBadge";
import TransactionPaymentMethod from "../TransactionPaymentMethod/TransactionPaymentMethod";

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
    accessorKey: "date",
    header: "Data do lançamento",
    cell: ({ row: { original: transaction } }) => formatDate(transaction.date),
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
