import React from "react";
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
};

const SelectInput = ({ selectLabel, selectOptions }: SelectInputProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder={selectLabel} />
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
