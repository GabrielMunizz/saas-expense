import SelectInput from "@/components/Select/SelectInput";
import { MONTHS } from "../_constants/_transactionConstants";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import Balance from "@/components/Balance/Balance";

import ByTypeBalance from "@/components/Balance/ByTypeBalance/ByTypeBalance";
import BalanceChart from "@/components/Balance/BalanceChart/BalanceChart";
import ExpensesByCategory from "@/components/ExpensesByCategory/ExpensesByCategory";
import { getTransactions } from "@/backend/actions/transactions/get-transactions";
import { calculateBalance } from "@/utils/calculateBalance";
import DashboardTransactions from "@/components/Transactions/DashboardTransactions/DashboardTransactions";

const Page = async () => {
  const currentMonth = new Date().getMonth();
  const transactions = await getTransactions();

  const deposits = calculateBalance(transactions, "DEPOSIT");
  const investiments = calculateBalance(transactions, "INVESTMENT");
  const expenses = calculateBalance(transactions, "EXPENSE");
  const loans = calculateBalance(transactions, "LOAN");

  const balanceData = {
    deposits,
    investiments,
    expenses,
    loans,
  };

  return (
    <main className="flex w-full flex-col items-center justify-start">
      <header className="my-8 flex w-[90%] items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex w-[30%] items-center justify-between">
          <button className="flex items-center justify-start hover:text-purple-700">
            <FileText size={18} className="mr-2" />
            Exportar para CSV
          </button>
          <SelectInput
            defaultValue={MONTHS[currentMonth]}
            selectOptions={MONTHS}
          />
        </div>
      </header>

      <section className="grid w-[90%] grid-cols-[2fr_1fr] gap-16">
        <section className="flex flex-col items-center justify-start">
          <Balance transactions={transactions} />
          <ByTypeBalance transactions={transactions} />
          <div className="grid w-full grid-cols-[1.3fr_2.12fr] gap-9">
            <BalanceChart
              balanceData={balanceData}
              currentMonth={MONTHS[currentMonth]}
            />
            <ExpensesByCategory transactions={transactions} />
          </div>
        </section>
        <DashboardTransactions transactions={transactions} />
      </section>
    </main>
  );
};

export default Page;
