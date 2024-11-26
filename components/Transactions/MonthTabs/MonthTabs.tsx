"use client";

import React, { Dispatch, SetStateAction } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MonthTabsProps = {
  months: string[];
  setFn: Dispatch<SetStateAction<string>>;
};

const MonthTabs = ({ setFn, months }: MonthTabsProps) => {
  const currentMonth = new Date().getMonth();

  return (
    <Tabs defaultValue={months[currentMonth + 1]} className="w-[80%]">
      <TabsList className="bg-transparent">
        {months.map((option) => (
          <TabsTrigger
            className="text-md mr-4 hover:text-primary"
            key={option}
            value={option}
            onClick={() => setFn(option)}
          >
            {option}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default MonthTabs;
