import React from "react";
import Image from "next/image";
import profileIcon from "@/public/profileIcon.png";
import { getUser } from "@/backend/actions/get-user";
import TextInput from "@/components/TextInput/TextInput";
import formatDate from "@/utils/formatDate";
import { CrownSimple } from "@phosphor-icons/react/dist/ssr/CrownSimple";
import EditProfileDialog from "@/components/EditProfileDialog/EditProfileDialog";

const Profile = async () => {
  const { name, email, createdAt, profileImage, nickname } = await getUser();

  return (
    <main className="flex h-full w-full flex-col items-center justify-start py-10">
      <section className="flex w-[45rem] flex-col items-center justify-center rounded-md">
        <div className="h-[6rem] w-full rounded-t-md bg-gradient-to-r from-purple-800/15 via-purple-900/80 to-purple-800/15" />
        <section className="flex w-full flex-col items-center justify-start rounded-b-md bg-[#0d091f]">
          <section className="flex w-[95%] items-center justify-between">
            <div>
              <Image
                src={profileImage ?? profileIcon}
                alt="profile photo"
                className="object-contain"
                width={200}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <div className="flex items-center justify-start">
                  <h2 className="mb-[4px] mr-2 text-2xl font-bold">{name}</h2>
                  <CrownSimple color="orange" weight="fill" size={18} />
                </div>
                <h2 className="text-lg text-muted-foreground">{email}</h2>
              </div>
              <div className="mr-8">
                <EditProfileDialog />
              </div>
            </div>
          </section>
          <section className="grid w-[95%] grid-cols-2 place-content-between px-6 pb-4">
            <div>
              <TextInput defaultValue={name} readonly label="Nome completo:" />
              <TextInput defaultValue={email} readonly label="E-mail:" />
              <TextInput
                readonly
                defaultValue={nickname ?? ""}
                label="Nickname:"
              />
            </div>
            <div className="ml-16">
              <TextInput
                label="Plano:"
                defaultValue="Premium"
                readonly
                className="w-[250px] border-0 outline-none focus-visible:ring-0"
              />
              <TextInput
                label="Membro desde:"
                defaultValue={formatDate(createdAt)}
                readonly
                className="w-[250px] border-0 outline-none focus-visible:ring-0"
              />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Profile;
