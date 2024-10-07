"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { Button, ButtonProps } from "@/shared/ui/button";
import { cn } from "../utils";
import { getPaginationCount } from "../utils/get-pagination-count";

const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "mx-auto flex w-full justify-center",
      className
    )}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-row items-center gap-1",
      className
    )}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("cursor-pointer", className)}
    {...props}
  />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"button">;

const PaginationLink = ({
  className,
  isActive,
  size,
  ...props
}: PaginationLinkProps) => (
  <Button
    variant={isActive ? "ghost" : "default"}
    size={size}
    className={cn(className, "hover:bg-opacity-90", {
      relative: isActive,
    })}
    {...props}
  >
    {props.children}
  </Button>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="На прошлую страницу"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Назад</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Следующая страница"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Вперед</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex h-9 w-9 items-center justify-center",
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export type PaginationComponentProps = {
  className?: string;
  currentPage: number;
  delta?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export const PaginationComponent = (
  props: PaginationComponentProps
) => {
  const {
    currentPage,
    delta = 2,
    onPageChange,
    totalPages,
    className,
  } = props;

  const pages = getPaginationCount(
    currentPage,
    totalPages,
    delta
  );

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        {pages.map((page) => {
          let content;

          if (typeof page === "string") {
            content = <PaginationEllipsis />;
          } else {
            content = (
              <PaginationLink
                isActive={page === currentPage + 1}
                onClick={() => onPageChange?.(page - 1)}
              >
                {page}
              </PaginationLink>
            );
          }

          return (
            <PaginationItem
              className={cn({
                "cursor-default": typeof page === "string",
              })}
              key={page}
            >
              {content}
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
