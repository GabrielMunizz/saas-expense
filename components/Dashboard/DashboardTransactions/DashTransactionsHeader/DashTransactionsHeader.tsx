import Link from "next/link";
import React from "react";

const DashTransactionsHeader = () => {
  return (
    <header className="flex w-full items-center justify-between">
      <h2 className="text-lg font-bold">Últimas transações</h2>
      <Link
        href="/transactions"
        className="rounded-full border-[1px] px-4 py-2 font-bold hover:bg-muted-foreground/10"
      >
        Ver mais
      </Link>
    </header>
  );
};

export default DashTransactionsHeader;
