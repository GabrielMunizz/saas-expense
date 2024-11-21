import { PAYMENT_METHOD_LABELS } from "@/app/_constants/_transactionConstants";
import {
  ArrowsLeftRight,
  CreditCard,
  Money,
  PixLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";
import { FaBarcode } from "react-icons/fa";

type TransactionPaymentMethodProps = {
  transaction: Transaction;
  classname?: string;
};

const TransactionPaymentMethod = ({
  transaction,
  classname,
}: TransactionPaymentMethodProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {transaction.paymentMethod === "PIX" ? (
        <>
          <PixLogo size={18} />
          <p className={`${classname} ml-2`}>
            {PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
          </p>
        </>
      ) : transaction.paymentMethod === "CREDIT_CARD" ||
        transaction.paymentMethod === "DEBIT_CARD" ? (
        <>
          <CreditCard size={18} />
          <p className={`${classname} ml-2`}>
            {PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
          </p>
        </>
      ) : transaction.paymentMethod === "CASH" ? (
        <>
          <Money size={18} />
          <p className={`${classname} ml-2`}>
            {PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
          </p>
        </>
      ) : transaction.paymentMethod === "BANK_TRANSFER" ? (
        <>
          <ArrowsLeftRight size={18} />
          <p className={`${classname} ml-2`}>
            {PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
          </p>
        </>
      ) : transaction.paymentMethod === "BANK_SLIP" ? (
        <>
          <FaBarcode className="text-md" />
          <p className={`${classname} ml-2`}>
            {PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
          </p>
        </>
      ) : (
        <p>{PAYMENT_METHOD_LABELS[transaction.paymentMethod]}</p>
      )}
    </div>
  );
};

export default TransactionPaymentMethod;
