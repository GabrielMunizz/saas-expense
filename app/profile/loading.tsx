import { Skeleton } from "@/components/ui/skeleton";

const ProfileLoading = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-start py-10">
      <section className="flex w-[45rem] flex-col items-center justify-center rounded-md">
        <div className="h-[6rem] w-full rounded-t-md bg-gradient-to-r from-purple-800/15 via-purple-900/80 to-purple-800/15" />
        <section className="flex w-full flex-col items-center justify-start rounded-b-md bg-[#0d091f]">
          <section className="flex w-[95%] items-center justify-between">
            <div className="m-4">
              <Skeleton className="mb-4 h-[150px] w-[150px] rounded-full object-contain" />
            </div>
            <div className="flex h-full w-full items-center justify-between">
              <div className="flex w-full flex-col gap-3">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
              <div className="flex w-full flex-col items-end gap-4">
                <Skeleton className="h-10 w-1/2" />
              </div>
            </div>
          </section>
          <section className="grid w-[95%] grid-cols-2 place-content-between px-6 pb-4">
            <div>
              <h1 className="mb-1">Nome completo:</h1>
              <Skeleton className="mb-4 h-10 w-full border-0 outline-none focus-visible:ring-0" />
              <h1 className="mb-1">Email:</h1>
              <Skeleton className="mb-4 h-10 w-full border-0 outline-none focus-visible:ring-0" />
              <h1 className="mb-1">Nickname:</h1>
              <Skeleton className="mb-4 h-10 w-full border-0 outline-none focus-visible:ring-0" />
            </div>
            <div className="ml-16">
              <h1 className="mb-1">Plano:</h1>
              <Skeleton className="mb-4 h-10 w-full border-0 outline-none focus-visible:ring-0" />
              <h1 className="mb-1">Membro desde:</h1>
              <Skeleton className="mb-4 h-10 w-full border-0 outline-none focus-visible:ring-0" />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProfileLoading;
