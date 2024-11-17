"use client";

import { Button } from "@/components/Button";
import { useState } from "react";

import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import TransactionDrawer from "../TransactionDrawer/TransactionDrawer";

const AddTransaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TransactionDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-[250px] rounded-full"
      >
        Adicionar transação
        <ArrowsDownUp weight="bold" />
      </Button>
    </TransactionDrawer>
  );
};

export default AddTransaction;
