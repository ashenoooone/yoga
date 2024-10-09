import { cn } from "@/shared/utils";
import { PoseShortType } from "../model/types";
import { ShortPose, ShortPoseProps } from "./short-pose";

type ShortPoseListProps = {
  className?: string;
  shortPoses: PoseShortType[];
  asLink?: boolean;
  onEditClick?: ShortPoseProps["onEditClick"];
};

export const ShortPoseList = (
  props: ShortPoseListProps
) => {
  const { className, shortPoses, asLink, onEditClick } =
    props;

  return (
    <div
      className={cn(
        "grid lg:grid-cols-3 gap-4 px-2",
        className
      )}
    >
      {shortPoses.map((shortPose) => (
        <ShortPose
          onEditClick={onEditClick}
          asLink={asLink}
          key={`short-pose-${shortPose.id}`}
          shortPose={shortPose}
        />
      ))}
    </div>
  );
};
