"use client";

import { NummusContext } from "@/context/NummusContext";
import formatDate from "@/utils/formatDate";
import React, { useContext } from "react";

const Welcome = () => {
  const { userName } = useContext(NummusContext);
  const today = new Date();
  return (
    <div className="my-6 flex w-full flex-col justify-center">
      <h1 className="text-4xl">Bem vindo, {userName ?? "Usuário"}!</h1>
      <p className="text-muted-foreground">{formatDate(today)}</p>
    </div>
  );
};

export default Welcome;
