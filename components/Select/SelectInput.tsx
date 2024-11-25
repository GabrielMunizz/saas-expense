import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type SelectInputProps = {
  selectOptions: string[];
  selectLabel?: string;
  className?: string;
  defaultValue?: string;
  setFn?: Dispatch<SetStateAction<string>>;
};

const SelectInput = ({
  selectLabel,
  selectOptions,
  className,
  defaultValue,
  setFn,
}: SelectInputProps) => {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={setFn ? (value) => setFn(value as string) : undefined}
    >
      <SelectTrigger className={cn("w-[250px]", className)}>
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
