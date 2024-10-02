import { cn } from "@/shared/utils";
import bg from "@/shared/assets/best-of-yoga.png";
import { title } from "process";

type AdvantagesLayoutProps = {
  className?: string;
  CenterContent: React.ReactNode;
  RightContent: React.ReactNode;
  LeftContent: React.ReactNode;
  Title: React.ReactNode;
};

export const AdvantagesLayout = (
  props: AdvantagesLayoutProps
) => {
  const {
    className,
    CenterContent,
    LeftContent,
    RightContent,
    Title,
  } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={cn(
        "p-10 flex flex-col items-center",
        className
      )}
    >
      <div className="mb-10">{Title}</div>
      <div className="flex gap-7 w-full">
        <div className="basis-2/5">{LeftContent}</div>
        <div className="basis-1/5">{CenterContent}</div>
        <div className="basis-2/5">{RightContent}</div>
      </div>
    </div>
  );
};
