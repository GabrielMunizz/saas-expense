import {
  ChartLineUp,
  CurrencyCircleDollar,
  UserCircle,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import NavLink from "./NavLink/NavLink";

export function NavBar() {
  return (
    <nav className="w-full">
      <ul className="flex flex-col">
        <NavLink route="/dashboard">
          <ChartLineUp className="mr-4" size={20} weight="bold" />
          Dashboard
        </NavLink>
        <NavLink route="/transactions">
          <Wallet className="mr-4" size={20} weight="bold" />
          Transações
        </NavLink>
        <NavLink route="/subscription">
          <CurrencyCircleDollar className="mr-4" size={20} weight="bold" />
          Assinatura
        </NavLink>
        <NavLink route="/profile">
          <UserCircle className="mr-4" size={20} weight="fill" />
          Perfil
        </NavLink>
      </ul>
    </nav>
  );
}
