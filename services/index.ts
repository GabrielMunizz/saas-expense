import { Transaction } from "@prisma/client";
import axios from "axios";

export async function handleFetchTransactions(
  id: string,
): Promise<Transaction[]> {
  const { data } = await axios.get(`/api/transactions?id=${id}`);

  return data;
}

export async function handleDeleteTransaction(id: string) {
  await axios.delete(`/api/transactions?id=${id}`);
}
