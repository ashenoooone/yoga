import { cn } from "@/shared/utils";
import { AdvantagesCard } from "./advantages-card";

type RightContentProps = {
  className?: string;
};

export const RightContent = (props: RightContentProps) => {
  const { className } = props;

  const cardClassname = {
    cardClassName:
      "bg-gradient-to-l from-white/50 via-white/50 to-white/80 ",
    className:
      "p-[3px] bg-gradient-to-l from-transparent via-green-900/20  to-green-900/60 rounded-xl",
  };

  return (
    <div
      className={cn(
        "text-left flex flex-col gap-5",
        className
      )}
    >
      <AdvantagesCard
        {...cardClassname}
        title="Дыхание"
        content="Техники дыхания в йоге учат контролировать дыхание, увеличивают объем легких."
      />
      <AdvantagesCard
        {...cardClassname}
        title="Концентрация"
        content="Практика йоги включает в себя элементы медитации, что улучшает концентрацию и внимание в повседневной жизни."
      />
      <AdvantagesCard
        {...cardClassname}
        title="Баланс тела и разума"
        content="Йога помогает гармонизировать физическое и психическое состояние"
      />
    </div>
  );
};
