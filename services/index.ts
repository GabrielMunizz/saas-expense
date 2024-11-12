import axios from "axios";

export async function handleDeleteTransaction(id: string) {
  await axios.delete(`/api/transactions?id=${id}`);
}
