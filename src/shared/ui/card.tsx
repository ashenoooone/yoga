import { cn } from "@/shared/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = (props: CardProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "rounded-md border py-2 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};
