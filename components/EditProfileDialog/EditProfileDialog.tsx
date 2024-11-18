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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr/PlusCircle";
import uploadImage from "@/backend/actions/upload-image";
import { Button as CustomButton } from "../Button";

const editProfileSchema = z.object({
  name: z.string().trim().min(2).optional(),
  email: z.string().email({ message: "Email inválido!" }),
  nickname: z.string().trim().optional(),
  profileImage: z.instanceof(File).nullable().optional(),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

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
  const [fileName, setFileName] = useState("Escolha uma foto de perfil");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name,
      email,
      nickname: nickname ?? undefined,
      profileImage: null,
    },
  });

  const handleSubmit = async (data: EditProfileFormData) => {
    // Adds the image file to a FormData object so the server action can handle the data properly
    setIsLoading(true);
    try {
      const formData = new FormData();

      let cloudinaryURL = "";

      if (data.profileImage) {
        formData.append("profileImage", data.profileImage);
        cloudinaryURL = await uploadImage(formData);
      }

      await editUserProfile({ ...data, profileImage: cloudinaryURL });
      form.reset();
      setOpen(false);
      toast.success("Perfil editado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error(
        "Oops! Um erro inesperado ocorreu. Por favor, tente mais tarde.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileNameChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    // The profileImage field is initially undefined, so we need to set its value using the file captured by the onChange event
    form.setValue("profileImage", file);
    setFileName(file ? `Arquivo: ${file.name}` : "Escolha uma foto de perfil");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen((prev) => !prev);
        setFileName("Escolha uma foto de perfil");
      }}
    >
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

            <Label className="mt-4 flex cursor-pointer items-center justify-center rounded-md border-2 border-muted-foreground py-4 text-center">
              {fileName === "Escolha uma foto de perfil" && (
                <PlusCircle
                  size={18}
                  weight="fill"
                  className="mr-2 text-muted-foreground"
                />
              )}
              {fileName}
              <Input
                type="file"
                className="hidden"
                {...form.register("profileImage", { required: true })}
                onChange={handleFileNameChange}
              />
            </Label>

            <CustomButton
              isLoading={isLoading}
              type="submit"
              className="mt-8 h-full py-3 font-bold"
            >
              Confirmar
            </CustomButton>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
