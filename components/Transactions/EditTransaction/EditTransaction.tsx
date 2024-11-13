import { handleDeleteTransaction } from "@/services";
import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";

type EditTransactionProps = {
  transaction: Transaction;
};

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <button className="mr-2">
        <PencilSimpleLine
          size={20}
          className="delay-75 hover:text-purple-600"
        />
      </button>
      <button onClick={() => handleDeleteTransaction(transaction.id)}>
        <TrashSimple size={20} className="delay-75 hover:text-purple-600" />
      </button>
    </div>
  );
};

export default EditTransaction;
