"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn } from "@phosphor-icons/react/dist/ssr";
import { DialogClose } from "@radix-ui/react-dialog";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../Button";
import FormInput from "../Form/FormInput";
import { Form } from "../ui/form";

const formSchema = z
  .object({
    isLogin: z.boolean(),
    name: z.string().optional(),
    email: z.string().email({ message: "Email inválido!" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.isLogin) {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: "custom",
          message: "As senhas não são iguais",
          path: ["confirmPassword"],
        });
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

const LoginRegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLogin: true,
    },
  });

  const isLogin = form.watch("isLogin");

  const handleLogin = async (email: string, password: string) => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return toast.error("Falha na autenticação");
    }

    router.push("/dashboard");
  };

  const handleRegister = async (
    name: string | undefined,
    email: string,
    password: string,
  ) => {
    await axios.post("/api/users", {
      name,
      email,
      password,
    });
    form.reset();
    form.setValue("isLogin", true);
    toast.success("Cadastro feito com sucesso");
  };

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (data.isLogin) {
        return await handleLogin(data.email, data.password);
      }
      await handleRegister(data.name, data.email, data.password);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return toast.error("Email ou senha inválidos");
        }
        toast.error(`Erro: ${error.response?.data.error}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleLogin = () => {
    form.reset();
    form.setValue("isLogin", !isLogin);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogClose onClick={handleToggleLogin} />
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full py-6 text-base">
          <SignIn size={32} weight="bold" />
          Faça login ou cadastre-se
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? "Login" : "Cadastre-se"}</DialogTitle>
          <DialogDescription>
            Para continuar, {isLogin ? "faça login" : "cadastre-se"} abaixo.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-3"
          >
            {!isLogin && (
              <FormInput
                form={form}
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
              />
            )}
            <FormInput
              form={form}
              name="email"
              label="Email"
              placeholder="Digite seu email"
            />
            <FormInput
              form={form}
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
            />
            {!isLogin && (
              <FormInput
                form={form}
                name="confirmPassword"
                label="Confirme sua senha"
                placeholder="Digite novamente sua senha"
                type="password"
              />
            )}
            <p className="text-sm text-gray-400">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
              <span
                className="cursor-pointer pl-1 text-white hover:underline"
                onClick={handleToggleLogin}
              >
                {isLogin ? "Cadastre-se" : "Faça login"}
              </span>
            </p>
            <Button
              isLoading={isLoading}
              type="submit"
              className="h-full py-3 font-bold"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginRegisterModal;
