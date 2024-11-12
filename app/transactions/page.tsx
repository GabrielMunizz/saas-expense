import Transactions from "@/components/Transactions/Transactions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const usarId = session?.user.id as string;
  return (
    <div className="w-full">
      <Transactions userId={usarId} />
    </div>
  );
};

export default Page;
