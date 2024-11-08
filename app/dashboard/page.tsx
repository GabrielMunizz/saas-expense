import LogoRender from "@/components/LogoRender/LogoRender";

export default function Page() {
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
        </div>
      </section>
    </main>
  );
}
