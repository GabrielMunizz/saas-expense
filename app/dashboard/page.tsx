import SelectInput from "@/components/Select/SelectInput";
import { MONTHS } from "../_constants/_transactionConstants";
import { FileText } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  const currentMonth = new Date().getMonth();

  return (
    <main className="flex w-full flex-col items-center justify-start">
      <header className="mt-8 flex w-[90%] items-center justify-between">
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
    </main>
  );
};

export default Page;
