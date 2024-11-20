"use client";
import React from "react";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  deposits: {
    label: "Receita",
    color: "hsl(var(--chart-2))",
  },
  expenses: {
    label: "Despesas",
    color: "hsl(var(--chart-5))",
  },
  investiments: {
    label: "Investimentos",
    color: "hsl(var(--chart-1))",
  },
  loans: {
    label: "Empréstimos",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

type BalanceChartProps = {
  currentMonth: string;
  balanceData: {
    deposits: number;
    expenses: number;
    investiments: number;
    loans: number;
  };
};

const BalanceChart = ({ currentMonth, balanceData }: BalanceChartProps) => {
  const chartData = [
    {
      category: "Receita",
      amount: balanceData.deposits,
      fill: "var(--color-deposits)",
    },
    {
      category: "Investimentos",
      amount: balanceData.investiments,
      fill: "var(--color-investiments)",
    },
    {
      category: "Despesas",
      amount: balanceData.expenses,
      fill: "var(--color-expenses)",
    },
    {
      category: "Empréstimos",
      amount: balanceData.loans,
      fill: "var(--color-loans)",
    },
  ];
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{currentMonth}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default BalanceChart;
