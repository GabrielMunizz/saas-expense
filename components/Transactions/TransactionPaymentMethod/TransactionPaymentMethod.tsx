import React from "react";
import {
  PixLogo,
  CreditCard,
  Money,
  ArrowsLeftRight,
  Bank,
} from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";

type TransactionPaymentMethodProps = {
  transaction: Transaction;
};

const PAYMENT_METHOD_LABELS = {
  PIX: "Pix",
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  CASH: "Dinheiro",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto",
  OTHER: "Outro",
};

const TransactionPaymentMethod = ({
  transaction,
}: TransactionPaymentMethodProps) => {
  return (
    <div className="flex flex-row items-center">
      {transaction.paymentMethod === "PIX" ? (
        <>
          <PixLogo size={18} className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : transaction.paymentMethod === "CREDIT_CARD" ||
        transaction.paymentMethod === "DEBIT_CARD" ? (
        <>
          <CreditCard size={18} className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : transaction.paymentMethod === "CASH" ? (
        <>
          <Money size={18} className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : transaction.paymentMethod === "BANK_TRANSFER" ? (
        <>
          <ArrowsLeftRight size={18} className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : transaction.paymentMethod === "BANK_SLIP" ? (
        <>
          <Bank size={18} className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : (
        <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
      )}
    </div>
  );
};

export default TransactionPaymentMethod;
