import CashFlow from "@/components/CashFlow/CashFlow";
import Header from "@/components/Header/Header";
import Transactions from "@/components/Transactions/Transactions";
import Welcome from "@/components/Welcome/Welcome";

export default function Page() {
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
}
