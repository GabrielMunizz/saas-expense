"use client";

import SelectInput from "@/components/Select/SelectInput";
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
import { Label } from "@/components/ui/label";
import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";

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
const AddTransactionDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Adicionar transação
          <ArrowsDownUp weight="bold" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-[75%] w-full">
          <DrawerHeader>
            <DrawerTitle className="text-xl">
              Adicione uma transação
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex h-[65%] flex-col justify-between p-4 pb-0">
            <Label htmlFor="name" className="text-muted-foreground">
              Nome
            </Label>
            <Input id="name" className="w-full" />
            <Label className="text-muted-foreground">Tipo</Label>
            <SelectInput
              className="w-full"
              selectLabel="Tipo"
              selectOptions={TYPE_OPTIONS}
            />
            <Label className="text-muted-foreground">Categoria</Label>
            <SelectInput
              className="w-full"
              selectLabel="Categoria"
              selectOptions={CATEGORIES}
            />
            <Label className="text-muted-foreground">Método de pagamento</Label>
            <SelectInput
              className="w-full"
              selectLabel="Método de pagamento"
              selectOptions={PAYING_METHODS}
            />
            <Label htmlFor="amount" className="text-muted-foreground">
              R$
            </Label>
            <Input id="amount" className="mb-[10%] w-full" />
          </div>
          <DrawerFooter>
            <Button className="w-full">Adicionar</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
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
