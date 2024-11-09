"use client";

import { NummusContext } from "@/context/NummusContext";
import formatDate from "@/utils/formatDate";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";

const Welcome = () => {
  const { setUser } = useContext(NummusContext);
  const { data } = useSession();
  const today = new Date();

  const sessionUser = {
    username: data?.user.name as string,
    userID: data?.user.id as string,
  };

  useEffect(() => {
    if (data) {
      setUser(sessionUser);
    }
  }, [data]);

  return (
    <div className="my-6 flex w-full flex-col justify-center">
      <h1 className="text-4xl">
        Bem vindo,{" "}
        <span className="text-purple-800">
          {sessionUser?.username ?? "Usuário"}
        </span>
        !
      </h1>
      <p className="text-muted-foreground">{formatDate(today)}</p>
    </div>
  );
};

export default Welcome;
