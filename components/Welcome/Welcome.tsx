import formatDate from "@/utils/formatDate";
import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";

import React from "react";

const Welcome = async () => {
  const session = await getServerSession(authOptions);
  const username = session?.user.name;
  const today = new Date();

  return (
    <div className="my-6 flex w-full flex-col justify-center">
      <h1 className="text-4xl">
        Bem vindo,{" "}
        <span className="text-purple-800">{username ?? "Usuário"}</span>!
      </h1>
      <p className="text-muted-foreground">{formatDate(today)}</p>
    </div>
  );
};

export default Welcome;
