import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { formatBalance } from "@/utils/formatBalance";

interface Benefits {
  icon: string;
  description: string;
}

type CardProps = {
  className?: string;
  plan: {
    title: string;
    planType: string;
    price: number;
    benefits: Benefits[];
  };
};

const SubscriptionCard = ({ className, plan }: CardProps) => {
  const { benefits, planType, title, price } = plan;

  const isFree = planType === "FREE";
  return (
    <Card className={cn("mr-8 w-[380px]", className)}>
      <CardHeader className={cn("flex flex-col items-center gap-2")}>
        <div className="flex flex-col items-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-3xl">
            {planType === "FREE" ? (
              "Grátis"
            ) : (
              <>
                <span className="text-4xl font-semibold text-foreground">
                  {formatBalance(price)}
                </span>
                / mês
              </>
            )}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="my-4 flex items-center justify-center px-8">
        <div className="mt-4 grid gap-2">
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
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center px-8">
        {isFree ? (
          <div className="mr-4 w-full rounded-full border-[1px] border-muted px-3 py-4 text-center font-semibold text-primary">
            <span className="mr-2 text-green-700">✔</span>
            <span className="text-white">Atual</span>
          </div>
        ) : (
          <Button className="text-md w-full rounded-full py-6 font-semibold">
            Fazer upgrade
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
