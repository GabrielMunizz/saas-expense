import React from "react";
import purpleBg from "@/public/purple-bg.jpg";
import Image from "next/image";
import SelectLanguage from "../_components/SelectLanguage/SelectLanguage";

const Login = () => {
  return (
    <main className="grid h-full grid-cols-2">
      <section className="relative flex items-center justify-center px-8">
        <SelectLanguage />
        <div className="h-[50%] w-full rounded-lg border-2 border-purple-600"></div>
      </section>

      <aside className="relative h-full w-full">
        <Image
          src={purpleBg}
          alt="Login BackGround"
          className="object-cover"
          fill
        />
      </aside>
    </main>
  );
};

export default Login;
