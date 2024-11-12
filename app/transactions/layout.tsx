import { authOptions } from "@/backend/authentication/auth";
import Header from "@/components/Header/Header";
import QueryProvider from "@/components/shared/QueryClientProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function LayoutWithHeader({
  children,
}: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <QueryProvider>
      <main className="flex h-full">
        <Header />
        {children}
      </main>
    </QueryProvider>
  );
}
