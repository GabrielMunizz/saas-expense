import { UseFormReturn } from "react-hook-form";
import {
  PaymentMethod,
  TransactionCategory,
  TransactionType,
} from "@prisma/client";

export type FormFieldProps = {
  form: UseFormReturn<
    {
      name: string;
      amount: string;
      type: TransactionType;
      date: Date;
      category: TransactionCategory;
      paymentMethod: PaymentMethod;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    undefined
  >;
  name: "name" | "type" | "amount" | "date" | "category" | "paymentMethod";
  label: string;
  placeHolder: string;
};