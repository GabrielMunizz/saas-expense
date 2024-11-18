import { authOptions } from "@/backend/authentication/auth";
import AddTransaction from "@/components/Transactions/AddTransaction/AddTransaction";
import Transactions from "@/components/Transactions/Transactions";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const usarId = session?.user.id as string;
  return (
    <div className="flex w-full flex-col items-center p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">Transações</h1>
        <AddTransaction />
      </div>
      <Transactions userId={usarId} />
    </div>
  );
};

export default Page;
