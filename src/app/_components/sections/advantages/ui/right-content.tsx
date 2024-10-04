import { cn } from "@/shared/utils";
import { AdvantagesCard } from "./advantages-card";

type RightContentProps = {
  className?: string;
};

export const RightContent = (props: RightContentProps) => {
  const { className } = props;
  return (
    <div
      className={cn(
        "text-left flex flex-col gap-5",
        className
      )}
    >
      <AdvantagesCard
        cardClassName="bg-gradient-to-l from-white/50 via-white/50 to-white/80 "
        className="p-[3px] bg-gradient-to-l from-transparent via-green-900/20  to-green-900/60 rounded-xl"
        title="Улучшение дыхания"
        content="Техники дыхания в йоге учат контролировать дыхание, увеличивают объем легких."
      />
      <AdvantagesCard
        cardClassName="bg-gradient-to-l from-white/50 via-white/50 to-white/80 "
        className="p-[3px] bg-gradient-to-l from-transparent via-green-900/20  to-green-900/60 rounded-xl"
        title="Повышение концентрации"
        content="Практика йоги включает в себя элементы медитации, что улучшает концентрацию и внимание в повседневной жизни."
      />
      <AdvantagesCard
        cardClassName="bg-gradient-to-l from-white/50 via-white/50 to-white/80 "
        className="p-[3px] bg-gradient-to-l from-transparent via-green-900/20  to-green-900/60 rounded-xl"
        title="Баланс тела и разума"
        content="Йога помогает гармонизировать физическое и психическое состояние"
      />
    </div>
  );
};
