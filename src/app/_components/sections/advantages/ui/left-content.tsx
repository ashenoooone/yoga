import { cn } from "@/shared/utils";
import { AdvantagesCard } from "./advantages-card";

type LeftContentProps = {
  className?: string;
};

export const LeftContent = (props: LeftContentProps) => {
  const { className } = props;

  const cardClasses = {
    cardClassName:
      "bg-gradient-to-r from-white/50 via-white/50 to-white/80",
    className:
      "p-[3px] bg-gradient-to-r from-transparent via-green-900/20  to-green-900/60 rounded-xl",
  };

  return (
    <div
      className={cn(
        "text-right flex flex-col gap-5",
        className
      )}
    >
      <AdvantagesCard
        title="Гибкость"
        content="Практика йоги помогает развивать гибкость, снимая мышечное напряжение и увеличивая диапазон движений в суставах."
        {...cardClasses}
      />
      <AdvantagesCard
        title="Снижение стресса"
        content="Дыхательные упражнения и медитации в йоге снижают уровень стресса и помогают справляться с тревогой и эмоциональным напряжением."
        {...cardClasses}
      />
      <AdvantagesCard
        title="Укрепление мышц"
        content="Йога развивает силу и тонус мышц, улучшая выносливость и поддерживая правильную осанку."
        {...cardClasses}
      />
    </div>
  );
};
