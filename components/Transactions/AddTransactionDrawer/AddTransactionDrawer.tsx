"use client";

import * as React from "react";
import { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import { Label } from "@/components/ui/label";
import SelectInput from "@/components/Select/SelectInput";
import { NewTransactionType } from "@/app/api/_types/_transactions";

const TYPE_OPTIONS = ["Depósito", "Despesa", "Investimento", "Empréstimo"];
const CATEGORIES = [
  "Casa",
  "Educação",
  "Entretenimento",
  "Alimentação",
  "Saúde",
  "Salário",
  "Assinatura",
  "Transporte",
  "Utilidades",
  "Outros",
];
const PAYING_METHODS = [
  "Pix",
  "Cartão de crédito",
  "Cartão de débito",
  "Dinheiro",
  "Transferência bancária",
  "Boleto",
  "Outro",
];

type AddTransactionDrawerProps = {
  userId: string;
};

const AddTransactionDrawer = ({ userId }: AddTransactionDrawerProps) => {
  const newTransactionInitial: NewTransactionType = {
    name: "",
    type: "DEPOSIT",
    amount: 0,
    category: "SALARY",
    paymentMethod: "PIX",
    userId,
  };

  const [newTransaction, setNewTransaction] = useState<NewTransactionType>(
    newTransactionInitial,
  );

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Adicionar transação
          <ArrowsDownUp />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-[75%] w-[60%] max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl">
              Insira as informações abaixo:
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex h-[65%] flex-col justify-between p-4 pb-0">
            <Label htmlFor="name" className="text-muted-foreground">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              value={newTransaction.name}
              className="w-[265px]"
              onChange={handleChange}
            />
            <Label className="text-muted-foreground">Tipo</Label>
            <SelectInput
              selectLabel="Tipo"
              name="type"
              selectOptions={TYPE_OPTIONS}
              handleChange={handleChange}
            />
            <Label className="text-muted-foreground">Categoria</Label>
            <SelectInput
              selectLabel="Categoria"
              name="category"
              selectOptions={CATEGORIES}
              handleChange={handleChange}
            />
            <Label className="text-muted-foreground">Método de pagamento</Label>
            <SelectInput
              selectLabel="Método de pagamento"
              name="paymentMethod"
              selectOptions={PAYING_METHODS}
              handleChange={handleChange}
            />
            <Label htmlFor="amount" className="text-muted-foreground">
              R$
            </Label>
            <Input
              id="amount"
              name="amount"
              value={newTransaction.amount}
              className="mb-[10%] w-[265px]"
              onChange={handleChange}
            />
          </div>
          <DrawerFooter>
            <Button className="w-[265px]">Adicionar</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-[265px]">
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddTransactionDrawer;
