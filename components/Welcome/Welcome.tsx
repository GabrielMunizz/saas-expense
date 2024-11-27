import { authOptions } from "@/backend/authentication/auth";
import formatDate from "@/utils/formatDate";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Welcome = async () => {
  const session = await getServerSession(authOptions);
  const username = session?.user.name;
  const today = new Date();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="text-lx mb-6 mt-16 flex w-full flex-col justify-center">
      <h2>Bem vindo,</h2>
      <h1 className="text-3xl font-bold text-primary">
        {username ?? "Usuário"}!
      </h1>
      <p className="text-sm text-muted-foreground">{formatDate(today)}</p>
    </div>
  );
};

export default Welcome;
