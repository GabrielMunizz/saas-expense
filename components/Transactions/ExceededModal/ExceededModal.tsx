import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

type ExceededModalProps = {
  isExceeded: boolean;
  setIsExceeded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExceededModal = ({ setIsExceeded, isExceeded }: ExceededModalProps) => {
  return (
    <AlertDialog open={isExceeded}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-2xl">
            Limite de transações excedido
          </AlertDialogTitle>
          <AlertDialogDescription className="text-md">
            Seu limite de transações do plano gratuito foi excedido. <br />
            Faça upgrade para o plano Premium e tenha transações ilimitadas!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 gap-4">
          <AlertDialogCancel onClick={() => setIsExceeded(false)}>
            Voltar
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => setIsExceeded(false)}>
            <Link href="/subscription">Fazer Upgrade!</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExceededModal;
