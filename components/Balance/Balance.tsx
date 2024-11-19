import { Wallet } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import AddTransaction from "../Transactions/AddTransaction/AddTransaction";
import ShowBalance from "./ShowBalance/ShowBalance";

const Balance = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-[#0d091f] p-8">
        <div className="flex w-full items-center justify-start">
          <Wallet size={18} className="mr-2" />
          <h1 className="text-muted-foreground">Saldo</h1>
        </div>
        <div className="flex w-full items-center justify-between">
          <ShowBalance balance={2500} />
          <AddTransaction />
        </div>
      </div>
    </div>
  );
};

export default Balance;
