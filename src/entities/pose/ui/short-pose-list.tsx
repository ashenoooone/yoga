import { cn } from "@/shared/utils";
import { PoseShortType } from "../model/types";
import { ShortPose } from "./short-pose";

type ShortPoseListProps = {
  className?: string;
  shortPoses: PoseShortType[];
};

export const ShortPoseList = (
  props: ShortPoseListProps
) => {
  const { className, shortPoses } = props;

  return (
    <div
      className={cn("grid lg:grid-cols-3 gap-4", className)}
    >
      {shortPoses.map((shortPose) => (
        <ShortPose
          key={`short-pose-${shortPose.id}`}
          shortPose={shortPose}
        />
      ))}
    </div>
  );
};
