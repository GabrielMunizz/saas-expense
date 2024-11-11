import NavLink from "./NavLink/NavLink";

export function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink route="/dashboard">Dashboard</NavLink>
        <NavLink route="/transactions">Transações</NavLink>
        <NavLink route="/subscription">Assinatura</NavLink>
        <NavLink route="/profile">Perfil</NavLink>
      </ul>
    </nav>
  );
}
