import Header from "@/components/Header/Header";
import QueryProvider from "@/components/shared/QueryClientProvider";
import { PropsWithChildren } from "react";

export default async function LayoutWithHeader({
  children,
}: PropsWithChildren) {
  return (
    <QueryProvider>
      <main className="flex h-full">
        <Header />
        {children}
      </main>
    </QueryProvider>
  );
}
