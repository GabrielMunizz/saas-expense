import { getUser } from "@/backend/actions/user/get-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

interface Benefits {
  icon: "include" | "exclude";
  description: string;
}

type CardProps = {
  className?: string;
  data: {
    title: string;
    plan: "FREE" | "PREMIUM";
    value: number;
    benefits: Benefits[];
  };
};

export async function SubscriptionCard({ className, data }: CardProps) {
  const { benefits, plan, title, value } = data;
  const { subscription } = await getUser();
  const isCurrentPlan = subscription === plan;
  return (
    <Card className={cn("w-[380px]", className)}>
      <CardHeader className="flex items-center gap-2">
        {isCurrentPlan && (
          <div className="rounded-xl bg-purple-950 bg-opacity-80 p-2 text-primary">
            Atual
          </div>
        )}
        <div>
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
      <CardContent className="grid gap-4">Olá</CardContent>
    </Card>
  );
}
