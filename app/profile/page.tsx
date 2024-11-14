import React from "react";
import Image from "next/image";
import profileIcon from "@/public/profileIcon.png";
import { getUser } from "@/backend/actions/get-user";
// import formatDate from "@/utils/formatDate";

const Profile = async () => {
  const { name, email } = await getUser();

  return (
    <main className="flex h-full w-full flex-col items-center justify-start py-10">
      <section className="h-[80%] w-[80%] rounded-md">
        <div className="h-[6rem] w-full rounded-t-md bg-gradient-to-r from-purple-800/15 via-purple-900/80 to-purple-800/15" />
        <div className="flex w-full items-center justify-start rounded-b-md bg-[#0d091f]">
          <div className="h-[200px] w-[200px]">
            <Image
              src={profileIcon}
              alt="profile photo"
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="mb-[4px] text-2xl font-bold">{name}</h2>
            <h2 className="text-lg text-muted-foreground">{email}</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
