import SelectInput from "@/components/Select/SelectInput";
import exportCSV from "@/utils/exportCSV";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import { Transaction } from "@prisma/client";
import React, { Dispatch, SetStateAction } from "react";

type DashboardHeaderProps = {
  setSelectedMonth: Dispatch<SetStateAction<string>>;
  selectedMonth: string;
  monthOptions: string[];
  transactions: Transaction[];
};

const DashboardHeader = ({
  setSelectedMonth,
  selectedMonth,
  monthOptions,
  transactions,
}: DashboardHeaderProps) => {
  const currentMonth = new Date().getMonth();

  return (
    <header className="my-8 flex w-[90%] items-center justify-end">
      <div className="flex w-[30%] items-center justify-between">
        <button
          onClick={() =>
            exportCSV(`${selectedMonth}`, "Transactions", transactions)
          }
          className="flex items-center justify-start hover:text-purple-700"
        >
          <FileText size={18} className="mr-2" />
          Exportar para CSV
        </button>
        <SelectInput
          defaultValue={monthOptions[currentMonth + 1]}
          selectOptions={monthOptions}
          setFn={setSelectedMonth}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
