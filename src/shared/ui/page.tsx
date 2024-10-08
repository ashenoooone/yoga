import { cn } from "@/shared/utils";

type PageProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Page = (props: PageProps) => {
  const { className, children } = props;
  return (
    <main
      className={cn(
        "flex flex-col gap-4 py-4 max-w-[1024px] mx-auto w-full",
        className
      )}
    >
      {children}
    </main>
  );
};
