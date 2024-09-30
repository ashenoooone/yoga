"use client";
import { cn } from "@/shared/utils";
import { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Typography } from "./typography";

type LinkProps = {
  className?: string;
  highlight?: boolean;
  children?: ReactNode;
} & NextLinkProps;

export const Link = (props: LinkProps) => {
  const {
    className,
    highlight = true,
    href,
    children,
    ...rest
  } = props;

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={cn(
        "relative hover:opacity-80 transition-all",
        className
      )}
      {...rest}
    >
      <Typography variant={"link"} className="">
        {children}
      </Typography>
      {highlight && isActive && (
        <span className="absolute top-[calc(100%+4px)] left-0 right-0 bottom-0 h-[4px] bg-mainColor rounded-t-full" />
      )}
    </NextLink>
  );
};
