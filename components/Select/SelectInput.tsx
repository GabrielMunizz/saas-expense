import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SelectInputProps = {
  selectOptions: string[];
  selectLabel?: string;
  className?: string;
  defaultValue?: string;
};

const SelectInput = ({
  selectLabel,
  selectOptions,
  className,
  defaultValue,
}: SelectInputProps) => {
  return (
    <Select defaultValue={defaultValue}>
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
