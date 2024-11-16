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
import { toast } from "sonner";
import editUserProfile from "@/backend/actions/edit-user";
import uploadImage from "@/backend/actions/uploadImage";

const editProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email({ message: "Email inválido!" }),
  nickname: z.string().min(2).optional(),
  profileImage: z.string().trim().min(2).optional(),
});

type FormData = z.infer<typeof editProfileSchema>;

type EditProfileDialogProps = {
  name: string;
  email: string;
  nickname: string | null;
};

const EditProfileDialog = ({
  name,
  email,
  nickname,
}: EditProfileDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name,
      email,
      nickname: nickname ?? "",
      profileImage: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      await editUserProfile(data);
      form.reset();
      setOpen(false);
      toast.success("Perfil editado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error(
        "Oops! Um erro inesperado ocorreu. Por favor, tente mais tarde.",
      );
    }
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
            action={uploadImage}
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
