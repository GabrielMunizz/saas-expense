"use client";

import { formatBalance } from "@/utils/formatBalance";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

type ShowBalanceProps = {
  balance: number;
};

const ShowBalance = ({ balance }: ShowBalanceProps) => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-3xl">
        {showBalance ? formatBalance(balance) : "******"}
      </h2>
      <button onClick={() => setShowBalance((prev) => !prev)}>
        {showBalance ? (
          <Eye size={24} className="ml-4" />
        ) : (
          <EyeSlash size={24} className="ml-4" />
        )}
      </button>
    </div>
  );
};

export default ShowBalance;
