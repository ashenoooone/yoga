import { cn } from "@/shared/utils";
import { PoseShortType } from "../model/types";
import { ShortPose } from "./short-pose";

type ShortPoseListProps = {
  className?: string;
  shortPoses: PoseShortType[];
  asLink?: boolean;
};

export const ShortPoseList = (
  props: ShortPoseListProps
) => {
  const { className, shortPoses, asLink } = props;

  return (
    <div
      className={cn(
        "grid lg:grid-cols-3 gap-4 px-2",
        className
      )}
    >
      {shortPoses.map((shortPose) => (
        <ShortPose
          asLink={asLink}
          key={`short-pose-${shortPose.id}`}
          shortPose={shortPose}
        />
      ))}
    </div>
  );
};
