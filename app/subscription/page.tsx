import { authOptions } from "@/backend/authentication/auth";
import FreeSubscriber from "@/components/Subscriptions/FreeSubscriber/FreeSubscriber";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Subscription = async () => {
  const session = await getServerSession(authOptions);
  // adicionar condicional para renderizar FreeSubscriber somente para assinaturas FREE

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex w-full flex-col items-start px-24 py-6">
      <section className="flex w-full flex-col items-center">
        <FreeSubscriber />
      </section>
    </main>
  );
};

export default Subscription;
