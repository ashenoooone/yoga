import {
  EditPoseForm,
  PoseShortType,
  useGetPoseById,
} from "@/entities/pose";
import { Dialog, DialogContent } from "@/shared/ui/dialog";
import LoaderSpinner from "@/shared/ui/spinner";
import { cn } from "@/shared/utils";
import { DialogProps } from "@radix-ui/react-dialog";

type EditPoseDialogProps = {
  className?: string;
  shortPose?: PoseShortType;
  isOpen: DialogProps["open"];
  onOpenChange: DialogProps["onOpenChange"];
};

export const EditPoseDialog = (
  props: EditPoseDialogProps
) => {
  const { className, shortPose, isOpen, onOpenChange } =
    props;

  const { data, isLoading, isError } = useGetPoseById({
    id: shortPose?.id,
  });

  let content;

  if (isLoading && !data) {
    content = <LoaderSpinner />;
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = <EditPoseForm pose={data!.data} />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={cn("", className)}>
        {content}
      </DialogContent>
    </Dialog>
  );
};
