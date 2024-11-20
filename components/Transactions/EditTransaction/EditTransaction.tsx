"use client";

import deleteTransaction from "@/backend/actions/transactions/delete-transaction";
import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { toast } from "sonner";
import TransactionDrawer from "../TransactionDrawer/TransactionDrawer";

type EditTransactionProps = {
  transaction: Transaction;
};

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    try {
      await deleteTransaction(id);
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success("Transação deletada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error(
        "Oops! Um erro inesperado ocorreu. Tente novamente mais tarde!",
      );
    }
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <TransactionDrawer
        transaction={transaction}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isEdit={true}
      >
        <button className="mr-2">
          <PencilSimpleLine
            size={20}
            className="delay-75 hover:text-purple-600"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </button>
      </TransactionDrawer>

      <button onClick={() => handleDelete(transaction.id)}>
        <TrashSimple size={20} className="delay-75 hover:text-purple-600" />
      </button>
    </div>
  );
};

export default EditTransaction;
