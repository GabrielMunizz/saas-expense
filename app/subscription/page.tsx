import { authOptions } from "@/backend/authentication/auth";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Subscription = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const data = [
    {
      title: "Plano Básico",
      plan: "FREE",
      value: 0,
      benefits: [
        { icon: "include", description: "Apenas 50 transações mensais" },
        { icon: "include", description: "Relatórios básicos" },
        { icon: "exclude", description: "Relatórios com IA" },
      ],
    },
    {
      title: "Plano Premium",
      plan: "PREMIUM",
      value: 19,
      benefits: [
        { icon: "include", description: "Transações Ilimitadas" },
        { icon: "include", description: "Relatórios com IA" },
        { icon: "include", description: "Suporte 24/7" },
      ],
    },
  ];
  return (
    <div className="flex w-full flex-col items-start px-24 py-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold">Assinatura</h1>
      </div>
      <div className="flex">
        {data.map((item, index) => (
          <SubscriptionCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
