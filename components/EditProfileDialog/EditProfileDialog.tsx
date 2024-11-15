"use client";

import React, { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider } from "react-hook-form";

const editProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Email inválido!" }),
  nickname: z.string().optional(),
  profileImage: z.string().trim().min(1).optional(),
});

type FormData = z.infer<typeof editProfileSchema>;

const EditProfileDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      nickname: "",
      profileImage: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    console.log({ data });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogClose />
      <DialogTrigger asChild>
        <Button className="w-[100px]">Editar</Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-3"
          >
            <FormInput
              form={form}
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
            />

            <FormInput
              form={form}
              name="email"
              label="Email"
              placeholder="Digite seu email"
            />
            <FormInput
              form={form}
              name="nickname"
              label="Nickname"
              placeholder="Digite seu apelido"
            />
            <FormInput
              form={form}
              name="profileImage"
              label="Imagem de perfil"
              placeholder="URL da imagem"
            />

            <Button type="submit" className="mt-8 h-full py-3 font-bold">
              Confirmar
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
