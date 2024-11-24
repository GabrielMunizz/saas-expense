"use client";

import Image from "next/image";
import React from "react";
import googleBtnImage from "@/public/googlebtn.png";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/url" });
  };
  return (
    <button onClick={handleGoogle}>
      <Image
        src={googleBtnImage}
        width={200}
        height={200}
        alt="Login com Google"
      />
    </button>
  );
};

export default GoogleButton;
