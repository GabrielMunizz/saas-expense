import React from "react";
import LogoRender from "../LogoRender/LogoRender";
import SignOutButton from "../SignOutButton/SignOutButton";

const Header = () => {
  return (
    <header className="my-6 flex w-full items-center justify-between">
      <LogoRender />
      <SignOutButton />
    </header>
  );
};

export default Header;
