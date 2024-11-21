import LoginRegisterModal from "@/components/LoginRegisterModal/LoginRegisterModal";
import LogoRender from "@/components/LogoRender/LogoRender";
import purpleBg from "@/public/purple-bg.jpg";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/backend/authentication/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (userId) {
    redirect("/dashboard");
  }

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
          <LoginRegisterModal />
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
