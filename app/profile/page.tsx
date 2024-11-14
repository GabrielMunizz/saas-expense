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
        <div className="h-[6rem] w-full rounded-t-md bg-gradient-to-r from-purple-900/10 via-purple-900/80 to-purple-900/10" />
        <div className="flex w-full items-center justify-start bg-[#0e0617]">
          <div className="h-[200px] w-[200px]">
            <Image
              src={profileIcon}
              alt="profile photo"
              className="object-contain"
            />
          </div>
          <div>
            <h2>Nome: {name}</h2>
            <h2>E-mail: {email}</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
