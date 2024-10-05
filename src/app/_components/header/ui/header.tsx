import { routerPaths } from "@/shared/configs/router-config";
import { Link } from "@/shared/ui/link";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/utils";

type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header
      className={cn("w-full bg-white shadow-xl", className)}
    >
      <div className="max-w-[1024px] mx-auto px-4 py-2 flex items-center justify-between">
        <Logo />
        <div className="flex gap-6 items-center">
          <Link href={routerPaths.main}>Главная</Link>
          <Link href={routerPaths.assanas}>Библиотека</Link>
          <Link href={routerPaths.pose}>
            Определить позу
          </Link>
        </div>
      </div>
    </header>
  );
};
