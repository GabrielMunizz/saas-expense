"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const DashTransactionsHeader = () => {
  const handleRedirect = () => {
    redirect("/transactions");
  };

  return (
    <header className="flex w-full items-center justify-between">
      <h2 className="text-lg font-bold">Transações</h2>
      <Button
        variant="outline"
        className="rounded-full font-bold"
        onClick={handleRedirect}
      >
        Ver mais
      </Button>
    </header>
  );
};

export default DashTransactionsHeader;
