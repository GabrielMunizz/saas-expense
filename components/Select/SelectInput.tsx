"use client";

import React, { ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectInputProps = {
  selectOptions: string[];
  selectLabel: string;
  name: string;
  handleChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const SelectInput = ({
  selectLabel,
  selectOptions,
  name,
  handleChange,
}: SelectInputProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    handleChange({
      target: { name, value },
    } as ChangeEvent<HTMLSelectElement>);
  };
  return (
    <Select
      onValueChange={(value) =>
        handleSelectChange({
          target: { name, value },
        } as ChangeEvent<HTMLSelectElement>)
      }
    >
      <SelectTrigger className="w-[265px]">
        <SelectValue placeholder={`Selecionar ${selectLabel.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectOptions.map((selectOption) => (
            <SelectItem key={selectOption} value={selectOption}>
              {selectOption}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
