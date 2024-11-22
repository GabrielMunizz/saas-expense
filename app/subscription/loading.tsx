import { Skeleton } from "@/components/ui/skeleton";

const SubscriptionLoading = () => {
  return (
    <main className="m-8 flex flex-col gap-4">
      <h1 className="text-2xl">Assinatura</h1>
      <div className="flex gap-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className="h-72 w-96 rounded-xl" />
        ))}
      </div>
    </main>
  );
};

export default SubscriptionLoading;
