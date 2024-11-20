import { SubscriptionCard } from "@/components/SubscriptionCard";

const Subscription = () => {
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
    <main className="m-8 flex flex-col gap-4">
      <h1 className="text-2xl">Assinatura</h1>
      {data.map((item, index) => (
        <SubscriptionCard key={index} data={item} />
      ))}
    </main>
  );
};

export default Subscription;
