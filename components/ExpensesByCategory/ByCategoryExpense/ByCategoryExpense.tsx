import React from "react";
import { Progress } from "@/components/ui/progress";
import { formatBalance } from "@/utils/formatBalance";

type ByCategoryExpenseProps = {
  title: string;
  percentage: number;
  amount: number;
};

const ByCategoryExpense = ({
  title,
  percentage,
  amount,
}: ByCategoryExpenseProps) => {
  return (
    <div className="mb-2 w-full">
      <h2 className="font-bold">{title}</h2>
      <Progress className="text-muted" value={percentage} />
      <h2 className="text-muted-foreground">{formatBalance(amount)}</h2>
    </div>
  );
};

export default ByCategoryExpense;
