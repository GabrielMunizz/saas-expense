import { authOptions } from "@/backend/authentication/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { DataTable } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";

const Transactions = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const transactions = userId
    ? await prisma.transaction.findMany({
        where: { userId },
      })
    : [];

  return <DataTable columns={transactionColumns} data={transactions} />;
};

export default Transactions;
