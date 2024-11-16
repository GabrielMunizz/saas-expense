import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Form, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import uploadImage from "@/backend/actions/uploadImage";
import { Input } from "../ui/input";

type UploadImageDialogProps = {
  children: React.ReactNode;
};

type ImageFile = {
  arquivo: FileList;
};

const UploadImageDialog = ({ children }: UploadImageDialogProps) => {
  const form = useForm<ImageFile>();
  return (
    <Dialog>
      <DialogClose />
      <DialogTrigger asChild>
        <button className="border-0 bg-[none]">{children}</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha a imagem</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(uploadImage)}
            className="flex flex-col gap-3"
          >
            <Input
              type="file"
              {...form.register("arquivo", { required: true })}
            />

            <Button type="submit" className="h-full py-3 font-bold">
              Enviar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadImageDialog;
