import { Skeleton } from "@/components/ui/skeleton";

const SubscriptionLoading = () => {
  return (
    <main className="flex w-full flex-col items-start px-24 py-6">
      <section className="flex w-full flex-col items-center">
        <div className="mb-6 flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold">Assinatura</h1>
        </div>
        <div className="flex gap-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-96 rounded-xl" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SubscriptionLoading;
