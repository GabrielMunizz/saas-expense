import { PAYMENT_METHOD_LABELS } from "@/app/_constants/_transactionConstants";
import {
  ArrowsLeftRight,
  CreditCard,
  Files,
  Money,
  PixLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";

type TransactionPaymentMethodProps = {
  transaction: Transaction;
};

const TransactionPaymentMethod = ({
  transaction,
}: TransactionPaymentMethodProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
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
          <Files size={18} weight="duotone" className="mr-2" />
          <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
        </>
      ) : (
        <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
      )}
    </div>
  );
};

export default TransactionPaymentMethod;
