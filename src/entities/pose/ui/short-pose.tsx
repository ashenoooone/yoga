"use client";
import { cn } from "@/shared/utils";
import { PoseShortType } from "../model/types";
import { ImageFallback } from "@/shared/ui/image-fallback";
import { Typography } from "@/shared/ui/typography";
import { useRouter } from "next/navigation";
import { routerPaths } from "@/shared/configs/router-config";
import { Edit, Edit2Icon } from "lucide-react";
import { Button } from "@/shared/ui/button";

export type onEditShortPose = (
  shortPose: PoseShortType
) => void;

export type ShortPoseProps = {
  className?: string;
  shortPose: PoseShortType;
  asLink?: boolean;
  onEditClick?: onEditShortPose;
};

export const ShortPose = (props: ShortPoseProps) => {
  const { className, shortPose, asLink, onEditClick } =
    props;

  const router = useRouter();

  return (
    <div
      onClick={
        asLink
          ? () =>
              router.push(
                `${routerPaths.assanas}/${shortPose.id}`
              )
          : undefined
      }
      className={cn("flex relative flex-col", className, {
        "hover:scale-[1.01] cursor-pointer transition-all":
          asLink,
      })}
    >
      {shortPose.image ? (
        <img
          className="rounded-t-xl w-full h-[240px]"
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
      {onEditClick && (
        <Button
          onClick={() => onEditClick(shortPose)}
          className="absolute top-2 right-2"
          variant={"empty"}
        >
          <Edit />
        </Button>
      )}
    </div>
  );
};
