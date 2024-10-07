import { cn } from "@/shared/utils";
import { PoseShortType } from "../model/types";
import Image from "next/image";
import { ImageFallback } from "@/shared/ui/image-fallback";
import { Typography } from "@/shared/ui/typography";

type ShortPoseProps = {
  className?: string;
  shortPose: PoseShortType;
};

export const ShortPose = (props: ShortPoseProps) => {
  const { className, shortPose } = props;
  return (
    <div className={cn("flex flex-col", className)}>
      {shortPose.image ? (
        <img
          className="rounded-t-xl w-full"
          src={shortPose.image}
          alt={shortPose.source_title}
        />
      ) : (
        <ImageFallback
          className="rounded-b-none"
          fallback={"Пока изображение отсутствует"}
        />
      )}
      <div className="bg-mainColor grow text-white p-2 px-4 rounded-b-xl">
        <Typography variant={"h5"} className="text-center">
          {shortPose.source_title}
        </Typography>
        <Typography
          variant={"h6"}
          className="text-white/70 font-normal"
        >
          {shortPose.short_description}
        </Typography>
      </div>
    </div>
  );
};
