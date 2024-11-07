import purpleBg from "@/public/purple-bg.jpg";
import { SignIn } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import LogoRender from "../_components/LogoRender/LogoRender";
import { Button } from "../_components/ui/button";

const Login = () => {
  return (
    <main className="grid h-full grid-cols-2">
      <section className="relative flex flex-col items-center justify-center px-12">
        <div className="flex max-w-xl flex-col justify-center">
          <LogoRender />

          <p className="my-6 text-xl text-muted-foreground">
            A Nummus é uma plataforma de gestão financeira que utiliza IA para
            monitorar suas movimentações, e oferecer insights personalizados,
            facilitando o controle do seu orçamento.
          </p>
          <Button variant="outline" className="w-full py-6 text-base">
            <SignIn size={32} weight="bold" />
            Faça login ou cadastre-se
          </Button>
        </div>
      </section>

      <aside className="relative h-full w-full">
        <Image
          src={purpleBg}
          alt="Login BackGround"
          className="object-cover"
          fill
        />
      </aside>
    </main>
  );
};

export default Login;
