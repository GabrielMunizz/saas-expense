import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type TextInputProps = {
  label: string;
  className?: string;
  readonly?: boolean;
  defaultValue?: string;
};

const TextInput = ({
  label,
  className,
  readonly,
  defaultValue,
}: TextInputProps) => {
  return (
    <Label className="text-lg">
      {label}
      <Input
        defaultValue={defaultValue}
        readOnly={readonly ?? false}
        className={cn("mb-6 border-none", className)}
      />
    </Label>
  );
};

export default TextInput;
