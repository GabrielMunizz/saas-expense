"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
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

import {
  CATEGORY_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
} from "@/app/_constants/_transactionConstants";
import { addTransaction } from "@/backend/actions/transactions/add-transaction";
import FormFieldInput from "@/components/FormField/FormFieldInput/FormFieldInput";
import FormFieldSelect from "@/components/FormField/FormFieldSelect/FormFieldSelect";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formatAmount } from "@/utils/formatAmount";
import {
  PaymentMethod,
  Transaction,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
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
  installments: z
    .union([z.string(), z.number()])
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "O número de parcelas deve ser um número positivo.",
    })
    .transform((value) => Number(value)),
  date: z.date({
    required_error: "A data é obrigatória.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

type TransactionDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transaction?: Transaction;
  children: React.ReactNode;
  isEdit?: boolean;
};

const TransactionDrawer = ({
  setIsOpen,
  isOpen,
  transaction,
  children,
  isEdit,
}: TransactionDrawerProps) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: transaction
      ? {
          ...transaction,
          amount: transaction?.amount.toString(),
          date: new Date(transaction.date),
          installments: Number(transaction.installments),
        }
      : {
          name: "",
          type: TransactionType.EXPENSE,
          category: TransactionCategory.ENTERTAINMENT,
          paymentMethod: PaymentMethod.PIX,
          amount: "",
          installments: 1,
          date: new Date(),
        },
  });

  const selectedPaymentMethod = form.getValues("paymentMethod");

  const handleSubmit = async (data: FormSchema) => {
    setIsLoading(true);
    const amount = formatAmount(data.amount);
    try {
      await addTransaction({ ...data, amount, id: transaction?.id });
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success(
        isEdit
          ? "Transação adiciona com sucesso!"
          : "Transação editada com sucesso!",
      );
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
          setIsOpen(open);
          form.reset();
        }
      }}
      open={isOpen}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-full w-[60%] max-w-sm py-10">
          <DrawerHeader className="px-0">
            <DrawerTitle className="text-2xl">
              {isEdit ? "Editar" : "Adicionar"} transação
            </DrawerTitle>
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

              {selectedPaymentMethod === "CREDIT_CARD" && (
                <FormFieldInput
                  name="installments"
                  placeHolder="Escolha a quantidade de parcelas"
                  form={form}
                  label="Parcelas"
                  type="number"
                />
              )}

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
                <Button isLoading={isLoading}>
                  {isEdit ? "Editar" : "Adicionar"}
                </Button>
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

export default TransactionDrawer;
