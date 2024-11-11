import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/transactions">Transações</Link>
        </li>
        <li>
          <Link href="/signature">Assinatura</Link>
        </li>
        <li>
          <Link href="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}
