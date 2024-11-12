import React from "react";
import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";

type EditTransactionProps = {
  transaction: Transaction;
};

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  return (
    <div className="flex flex-row items-center pl-4">
      <button className="mr-2">
        <PencilSimpleLine size={20} className="hover:text-purple-600" />
      </button>
      <button>
        <TrashSimple size={20} className="hover:text-purple-600" />
      </button>
    </div>
  );
};

export default EditTransaction;
