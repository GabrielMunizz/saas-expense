"use client";

import CashFlow from "@/components/CashFlow/CashFlow";
import Header from "@/components/Header/Header";
import Welcome from "@/components/Welcome/Welcome";
import { NummusProvider } from "@/context/NummusContext";

export default function Page() {
  return (
    <NummusProvider>
      <main className="grid h-full grid-cols-[1fr_2fr]">
        <section className="relative flex flex-col items-start justify-start border-r-2 px-12">
          <Header />
          <Welcome />
          <CashFlow />
        </section>
        <div>
          <h2>Teste</h2>
        </div>
      </main>
    </NummusProvider>
  );
}
