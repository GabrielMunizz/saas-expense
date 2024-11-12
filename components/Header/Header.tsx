import LogoRender from "../LogoRender/LogoRender";
import { NavBar } from "../NavBar/NavBar";
import SignOutButton from "../SignOutButton/SignOutButton";
import Welcome from "../Welcome/Welcome";

const Header = () => {
  return (
    <header className="relative flex min-w-80 flex-col items-start justify-between border-r-2 px-8 pb-10 pt-16">
      <div className="w-full">
        <LogoRender />
        <Welcome />
        <NavBar />
      </div>
      <SignOutButton />
    </header>
  );
};

export default Header;
