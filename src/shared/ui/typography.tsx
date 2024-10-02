import React from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";
import { cn } from "../utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      link: "font-medium text-primary",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<
      | HTMLHeadingElement
      | HTMLParagraphElement
      | HTMLAnchorElement
    >,
    VariantProps<typeof typographyVariants> {}

export const Typography = ({
  className,
  variant,
  children,
  ...props
}: TypographyProps) => {
  const Component =
    (variant === "link" ? "p" : variant) || "p";

  return (
    <Component
      className={cn(
        typographyVariants({ variant, className })
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
