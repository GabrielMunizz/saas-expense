"use client";

import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "../Button";

const SignOutButton = () => {
  const handleLogout = () => {
    signOut();
    redirect("/login");
  };
  return (
    <Button
      variant="outline"
      className="w-full justify-start rounded-full py-6 pl-8 text-sm font-bold text-muted-foreground hover:bg-transparent hover:text-white"
      onClick={handleLogout}
    >
      <SignOut size={22} weight="bold" className="mr-4" />
      Sair
    </Button>
  );
};

export default SignOutButton;
