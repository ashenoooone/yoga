import { Card } from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";

type AdvantagesCardProps = {
  className?: string;
  title: string;
  cardClassName?: string;
  content: string;
} & React.ComponentProps<"div">;

export const AdvantagesCard = (
  props: AdvantagesCardProps
) => {
  const {
    className,
    cardClassName,
    content,
    title,
    ...rest
  } = props;
  return (
    <div className={cn("", className)}>
      <Card
        className={cn(
          cardClassName,
          "border-none rounded-xl lg:h-[150px]"
        )}
        {...rest}
      >
        <Typography
          variant={"h4"}
          className="font-bold mb-2 lg:text-xl text-base"
        >
          {title}
        </Typography>
        <Typography
          variant={"h6"}
          className="text-muted-foreground font-normal lg:base text-sm md:inline hidden"
        >
          {content}
        </Typography>
      </Card>
    </div>
  );
};
