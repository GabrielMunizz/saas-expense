"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  route: string;
};

const NavLink = ({ children, route }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "my-2 flex items-center justify-start rounded-sm bg-gray-300 bg-opacity-10 py-3 pl-8 text-center text-base font-semibold text-slate-400 delay-75 hover:bg-purple-950 hover:bg-opacity-40 hover:text-primary",
        {
          "bg-purple-950 bg-opacity-40 text-primary": pathname === route,
        },
      )}
      href={route}
    >
      {children}
    </Link>
  );
};

export default NavLink;
