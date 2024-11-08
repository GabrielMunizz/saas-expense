"use client";

import React from "react";
import { Button } from "../Button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const SignOutButton = () => {
  const handleLogout = () => {
    console.log("clicou");
    signOut();
    redirect("/login");
  };
  return (
    <Button
      variant="link"
      className="max-w-20 font-bold"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default SignOutButton;
