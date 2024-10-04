import { routerPaths } from "@/shared/configs/router-config";
import { Link } from "@/shared/ui/link";
import { Logo } from "@/shared/ui/logo";
import Separator from "@/shared/ui/separator";
import { cn } from "@/shared/utils";

type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  const { className } = props;

  const separator = (
    <Separator
      className="h-8 w-[2px] rounded-xl"
      orientation="vertical"
    />
  );

  return (
    <footer
      className={cn(
        "bg-mainColor p-2 text-white rounded-t-xl",
        className
      )}
    >
      <div className="flex items-center flex-col gap-4">
        <Logo height={100} width={100} />
        <div className="flex gap-4 items-center">
          <Link
            className="text-white"
            href={routerPaths.main}
          >
            Главная
          </Link>
          {separator}
          {/* todo страница о нас */}
          <Link
            className="text-white"
            href={routerPaths.profile}
          >
            О нас
          </Link>
          {separator}
          <Link
            className="text-white"
            href={routerPaths.profile}
          >
            Профиль
          </Link>
        </div>
      </div>
    </footer>
  );
};
