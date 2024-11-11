import { authOptions } from "@/backend/authentication/auth";
import Header from "@/components/Header/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import SignOutButton from "@/components/SignOutButton/SignOutButton";
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
    <main className="grid h-full grid-cols-[1fr_4fr]">
      <section className="relative flex flex-col items-start justify-around border-r-2 px-12">
        <Header />
        <Welcome />
        <NavBar />
        <SignOutButton />
      </section>
      <div>
        <Transactions />
      </div>
    </main>
  );
};

export default Page;
