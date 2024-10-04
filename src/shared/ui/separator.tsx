import React from "react";
import { cn } from "../utils";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  decorative?: boolean;
}

export default function Separator({
  orientation = "horizontal",
  className,
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={
        orientation === "vertical" ? "vertical" : undefined
      }
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal"
          ? "h-[1px] w-full"
          : "h-full w-[1px] bg-white",
        className
      )}
      {...props}
    />
  );
}
