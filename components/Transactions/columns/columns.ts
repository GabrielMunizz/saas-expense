"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "createdAt",
    header: "Data do lançamento",
  },
  {
    accessorKey: "amount",
    header: "Quantidade(R$)",
  },
  {
    accessorKey: "actions",
  },
];
