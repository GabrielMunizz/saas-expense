import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const LogoRender = () => {
  return (
    <div className="flex items-center justify-start">
      <Image src={logo} alt="Nummus Logo" className="mr-2" />
      <h1 className="font-raleway text-3xl">Nummus</h1>
    </div>
  );
};

export default LogoRender;
