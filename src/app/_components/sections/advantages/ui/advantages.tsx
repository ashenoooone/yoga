import yogaWoman from "@/shared/assets/yoga-woman.svg";
import Image from "next/image";
import { Typography } from "@/shared/ui/typography";
import { AdvantagesLayout } from "./advantages-layout";
import { LeftContent } from "./left-content";
import { RightContent } from "./right-content";

type AdvantagesProps = {
  className?: string;
};

export const Advantages = (props: AdvantagesProps) => {
  const { className } = props;
  return (
    <AdvantagesLayout
      LeftContent={<LeftContent />}
      RightContent={<RightContent />}
      Title={
        <Typography
          variant={"h1"}
          className="text-center font-pacifico font-normal"
        >
          Лучшее в йоге
        </Typography>
      }
      CenterContent={
        <Image src={yogaWoman} alt="yoga woman" />
      }
      className={className}
    />
  );
};
