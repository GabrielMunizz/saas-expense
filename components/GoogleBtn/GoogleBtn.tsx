"use client";

import React from "react";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

const GoogleBtn = () => {
  const handleGoogle = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };
  return (
    <GoogleButton
      style={{ width: "100%", marginTop: "2rem" }}
      onClick={handleGoogle}
    />
  );
};

export default GoogleBtn;
