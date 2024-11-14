import deleteTransaction from "@/backend/actions/delete-transaction";
import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import { Transaction } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type EditTransactionProps = {
  transaction: Transaction;
};

const EditTransaction = ({ transaction }: EditTransactionProps) => {
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
      <button className="mr-2">
        <PencilSimpleLine
          size={20}
          className="delay-75 hover:text-purple-600"
        />
      </button>
      <button onClick={() => handleDelete(transaction.id)}>
        <TrashSimple size={20} className="delay-75 hover:text-purple-600" />
      </button>
    </div>
  );
};

export default EditTransaction;
