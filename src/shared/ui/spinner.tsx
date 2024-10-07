import { Loader2 } from "lucide-react";
import { cn } from "../utils";

interface LoaderSpinnerProps {
  className?: string;
  centered?: boolean;
}

export default function LoaderSpinner({
  className,
  centered = false,
}: LoaderSpinnerProps = {}) {
  return (
    <div
      className={cn("flex items-center justify-center", {
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full":
          centered,
      })}
    >
      <Loader2
        className={cn(
          "animate-spin text-mainColor",
          className
        )}
      />
    </div>
  );
}
