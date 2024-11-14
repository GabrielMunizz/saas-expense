"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";

import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import TransactionDrawer from "../TransactionDrawer/TransactionDrawer";

const AddTransaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer
      onOpenChange={(open) => {
        if (!open) {
          setIsOpen(false);
        }
      }}
      open={isOpen}
    >
      <DrawerTrigger asChild>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-[250px]"
        >
          Adicionar transação
          <ArrowsDownUp weight="bold" />
        </Button>
      </DrawerTrigger>
      <TransactionDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
    </Drawer>
  );
};

export default AddTransaction;
