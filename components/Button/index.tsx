import { cn } from "@/lib/utils";
import { TailSpin } from "react-loader-spinner";
import { Button as ShadcnButton } from "../ui/button";

interface Props extends React.ComponentProps<typeof ShadcnButton> {
  isLoading?: boolean;
}

export function Button({ children, className, isLoading, ...props }: Props) {
  return (
    <ShadcnButton className={cn("mt-2 w-full", className)} {...props}>
      {isLoading ? <TailSpin color="#ffffff" /> : children}
    </ShadcnButton>
  );
}
