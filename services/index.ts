import axios from "axios";
import { Transaction } from "@prisma/client";

export async function handleFetchTransactions(id: string) {
  const { data } = await axios.get(`/api/transactions?id=${id}`);

  const transactions: Transaction[] = data;

  return transactions;
}

export async function handleDeleteTransaction(id: string) {
  await axios.delete(`/api/transactions?id=${id}`);
}
