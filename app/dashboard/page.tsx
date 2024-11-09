import { authOptions } from "@/backend/authentication/auth";
import CashFlow from "@/components/CashFlow/CashFlow";
import Header from "@/components/Header/Header";
import Transactions from "@/components/Transactions/Transactions";
import Welcome from "@/components/Welcome/Welcome";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="grid h-full grid-cols-[1fr_2fr]">
      <section className="relative flex flex-col items-start justify-start border-r-2 px-12">
        <Header />
        <Welcome />
        <CashFlow />
      </section>
      <div>
        <div>
          <Transactions />
        </div>
      </div>
    </main>
  );
};

export default Page;
