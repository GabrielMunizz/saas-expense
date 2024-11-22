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
        "my-2 flex items-center justify-start rounded-full border-[1px] border-muted py-3 pl-8 text-center text-base font-semibold text-slate-400 delay-75 hover:text-white",
        {
          "border-0 bg-primary bg-opacity-40 text-white": pathname === route,
        },
      )}
      href={route}
    >
      {children}
    </Link>
  );
};

export default NavLink;
