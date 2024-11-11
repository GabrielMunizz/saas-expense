import Link from "next/link";
import React from "react";

type NavLinkProps = {
  children: string;
  route: string;
};

const NavLink = ({ children, route }: NavLinkProps) => {
  return (
    <li>
      <Link className="hover:text-primary" href={route}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
