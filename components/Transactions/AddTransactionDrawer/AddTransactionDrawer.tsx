"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormFieldInput from "@/components/FormField/FormFieldInput/FormFieldInput";
import FormFieldSelect from "@/components/FormField/FormFieldSelect/FormFieldSelect";
import {
  CATEGORY_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
} from "@/app/_constants/_transactionConstants";
import { DatePicker } from "@/components/ui/date-picker";
import { addTransaction } from "@/backend/actions/add-transaction";
import { formatAmount } from "@/utils/formatAmount";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(3, {
    message: "O nome é obrigatório.",
  }),
  amount: z.string().trim().min(1, {
    message: "O valor é obrigatório.",
  }),
  type: z.nativeEnum(TransactionType, {
    required_error: "O tipo é obrigatório.",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "A categoria é obrigatória.",
  }),
  paymentMethod: z.nativeEnum(PaymentMethod, {
    required_error: "O método de pagamento é obrigatório.",
  }),
  date: z.date({
    required_error: "A data é obrigatória.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const AddTransactionDrawer = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: TransactionType.EXPENSE,
      category: TransactionCategory.ENTERTAINMENT,
      paymentMethod: PaymentMethod.PIX,
      amount: "",
      date: new Date(),
    },
  });

  const handleSubmit = async (data: FormSchema) => {
    setIsLoading(true);
    const amount = formatAmount(data.amount);
    try {
      await addTransaction({ ...data, amount });
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success("Transação adiciona com sucesso!");
      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Um erro ocorreu. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer
      onOpenChange={(open) => {
        if (!open) {
          form.reset();
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
      <DrawerContent>
        <div className="mx-auto h-full w-[60%] max-w-sm py-10">
          <DrawerHeader className="px-0">
            <DrawerTitle className="text-2xl">Adicionar transação</DrawerTitle>
            <DrawerDescription className="mt-[-6px]">
              Insira as informações abaixo:
            </DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormFieldInput
                name="name"
                placeHolder="Nome da transação"
                form={form}
                label="Nome"
              />
              <FormFieldInput
                name="amount"
                placeHolder="Valor da transação"
                form={form}
                label="Valor"
              />

              <FormFieldSelect
                name="type"
                placeHolder="Escolha o tipo"
                form={form}
                label="Tipo"
                options={TRANSACTION_TYPE_OPTIONS}
              />
              <FormFieldSelect
                name="category"
                placeHolder="Escolha a categoria"
                form={form}
                label="Categoria"
                options={CATEGORY_OPTIONS}
              />
              <FormFieldSelect
                name="paymentMethod"
                placeHolder="Escolha o método de pagamento"
                form={form}
                label="Método de pagamento"
                options={PAYMENT_METHOD_OPTIONS}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data</FormLabel>
                    <DatePicker value={field.value} onChange={field.onChange} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter>
                <Button isLoading={isLoading}>Adicionar</Button>
                <DrawerClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Cancelar
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddTransactionDrawer;
