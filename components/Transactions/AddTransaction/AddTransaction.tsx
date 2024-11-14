"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";

import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import TransactionDrawer from "../TransactionDrawer/TransactionDrawer";

const AddTransaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TransactionDrawer setIsOpen={setIsOpen} isOpen={isOpen}>
      <Button onClick={() => setIsOpen((prev) => !prev)} className="w-[250px]">
        Adicionar transação
        <ArrowsDownUp weight="bold" />
      </Button>
    </TransactionDrawer>
  );
};

export default AddTransaction;
