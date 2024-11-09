"use client";

import React, { useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { DataTable } from "../ui/data-table";
import { transactionColumns } from "./columns/columns";
import { Transaction } from "@prisma/client";
import { NummusContext } from "@/context/NummusContext";

const Transactions = () => {
  const { user } = useContext(NummusContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleTransactions = async (id: string) => {
    try {
      const { data } = await axios.get(`/api/transactions?id=${id}`);
      setTransactions(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return toast.error("Email ou senha inválidos");
        }
        toast.error(`Erro: ${error.response?.data.error}`);
      }
    }
  };

  useEffect(() => {
    if (user?.userID) {
      const userId = user.userID;
      handleTransactions(userId);
    }
  }, [user?.userID]);
  return <DataTable columns={transactionColumns} data={transactions} />;
};

export default Transactions;
