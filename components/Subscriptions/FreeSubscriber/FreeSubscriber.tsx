import React from "react";
import SubscriptionCard from "../SubscriptionCard";

const plansData = [
  {
    title: "Plano Básico",
    planType: "FREE",
    price: 0,
    benefits: [
      { icon: "include", description: "50 transações mensais" },
      { icon: "include", description: "Relatórios básicos" },
      { icon: "exclude", description: "Filtrar transações" },
      { icon: "exclude", description: "Exportar relatórios" },
      { icon: "exclude", description: "Suporte 24/7" },
    ],
  },
  {
    title: "Plano Premium",
    planType: "PREMIUM",
    price: 19.9,
    benefits: [
      { icon: "include", description: "Transações Ilimitadas" },
      { icon: "include", description: "Relatórios avançados" },
      { icon: "include", description: "Filtrar transações" },
      { icon: "include", description: "Exportar relatórios" },
      { icon: "include", description: "Suporte 24/7" },
    ],
  },
];

const FreeSubscriber = () => {
  return (
    <section className="mt-4 flex w-full flex-col items-center justify-center">
      <h1 className="mb-[-4px] text-5xl font-bold">
        Descubra o Poder do{" "}
        <span className="text-5xl font-bold text-primary">Premium</span>
      </h1>
      <h2 className="text-2xl italic text-muted-foreground">
        Dê o próximo passo na gestão das suas finanças
      </h2>
      <div className="mt-8 w-[40%]">
        <h2 className="mb-8 text-center text-xl">
          Com a assinatura Premium do Nummus, você terá acesso a ferramentas
          exclusivas que tornam o controle financeiro mais prático, eficiente e
          completo.
        </h2>
      </div>
      <div className="my-8 flex">
        {plansData.map((plan) => (
          <SubscriptionCard key={plan.title} plan={plan} />
        ))}
      </div>
      <div className="mt-8 w-[40%]">
        <h2 className="text-center text-xl">
          Por apenas R$ 19,90 por mês tenha acesso ilimitado aos recursos
          Premium!
        </h2>
      </div>
    </section>
  );
};

export default FreeSubscriber;
