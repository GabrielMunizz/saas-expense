import SelectInput from "@/components/Select/SelectInput";
import { MONTHS } from "../_constants/_transactionConstants";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import Balance from "@/components/Balance/Balance";

const Page = () => {
  const currentMonth = new Date().getMonth();

  return (
    <main className="flex w-full flex-col items-center justify-start">
      <header className="my-8 flex w-[90%] items-center justify-between">
        <div>
          <h1 className="text-2xl">Dashboard</h1>
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
          <div className="w-full">
            <Balance />
          </div>
        </section>
        <aside className="flex items-center justify-center border-2">
          transações
        </aside>
      </section>
    </main>
  );
};

export default Page;
