import { getUser } from "@/backend/actions/user/get-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Benefits {
  icon: string;
  description: string;
}

type CardProps = {
  className?: string;
  data: {
    title: string;
    plan: string;
    value: number;
    benefits: Benefits[];
  };
};

export async function SubscriptionCard({ className, data }: CardProps) {
  const { benefits, plan, title, value } = data;
  const { subscription } = await getUser();
  const isCurrentPlan = subscription === plan;
  return (
    <Card className={cn("mr-8 w-[380px]", className)}>
      <CardHeader
        className={cn("flex flex-col items-center gap-2", {
          "flex-row": isCurrentPlan,
        })}
      >
        {isCurrentPlan && (
          <div className="mr-4 rounded-md bg-purple-950 bg-opacity-40 px-3 py-1 text-primary">
            Atual
          </div>
        )}
        <div className="flex flex-col items-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-3xl">
            R$
            <span className="text-5xl font-semibold text-foreground">
              {value}
            </span>
            /mês
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="my-4 grid gap-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-4",
              benefit.icon === "include" ? "text-green-500" : "text-red-500",
            )}
          >
            {benefit.icon === "include" ? "✔" : "✖"}
            <span className="text-slate-400">{benefit.description}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          className="w-full"
          disabled={isCurrentPlan}
          variant={isCurrentPlan ? "secondary" : "default"}
        >
          {isCurrentPlan
            ? "Plano atual"
            : value === 0
              ? "Usar plano grátis"
              : "Fazer upgrade"}
        </Button>
      </CardFooter>
    </Card>
  );
}
