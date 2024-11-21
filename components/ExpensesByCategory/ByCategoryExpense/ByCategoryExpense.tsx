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
      <div className="flex w-full items-center justify-between">
        <h2 className="text-sm font-bold">{title}</h2>
        <h2 className="text-sm font-bold">{percentage.toFixed()}%</h2>
      </div>
      <Progress className="text-muted" value={percentage} />
      <h2 className="text-sm text-muted-foreground">{formatBalance(amount)}</h2>
    </div>
  );
};

export default ByCategoryExpense;
