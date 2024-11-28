import React from "react";
import TextInput from "../TextInput/TextInput";
import { $Enums, Plan } from "@prisma/client";
import formatDate from "@/utils/formatDate";

type ProfileInfoProps = {
  name: string;
  nickname: string | null;
  createdAt: Date;
  email: string;
  subscription: $Enums.Plan;
  transactionPercentage: number;
};

const ProfileInfo = ({
  name,
  nickname,
  email,
  createdAt,
  subscription,
}: ProfileInfoProps) => {
  return (
    <section className="ml-4 grid w-[90%] grid-cols-2 px-6 pb-4">
      <div>
        <TextInput
          defaultValue={name}
          readonly
          label="Nome completo:"
          className="w-[80%]"
        />
        <TextInput
          readonly
          defaultValue={nickname ?? ""}
          label="Nickname:"
          className="w-[250px]"
        />

        <TextInput
          label="Membro desde:"
          defaultValue={formatDate(createdAt)}
          readonly
          className="w-[200px] border-0 outline-none focus-visible:ring-0"
        />
      </div>
      <div className="pl-8">
        <TextInput
          defaultValue={email}
          readonly
          label="E-mail:"
          className="w-[450px]"
        />
        <TextInput
          label="Plano:"
          defaultValue={subscription === Plan.PREMIUM ? "Premium" : "Free"}
          readonly
          className="w-[250px] border-0 outline-none focus-visible:ring-0"
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
