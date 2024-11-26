import Dashboard from "@/components/Dashboard/Dashboard";

import { authOptions } from "@/backend/authentication/auth";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <Dashboard userId={userId} />
    </main>
  );
};

export default Page;
