import {
  EditPoseForm,
  PoseShortType,
  PoseType,
  useGetPoseById,
  usePutUpdatePoseById,
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

  const {
    mutateAsync,
    isIdle,
    isError: isMutateError,
    isLoading: isMutateLoading,
    isSuccess: isMutateSuccess,
  } = usePutUpdatePoseById();

  const { data, isLoading, isError } = useGetPoseById({
    id: shortPose?.id,
  });

  const onSubmit = (pose: PoseType) => {
    mutateAsync({
      id: pose.id,
      body: pose,
    });
  };

  let content;

  if (isLoading && !data) {
    content = <LoaderSpinner />;
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = (
      <EditPoseForm
        isError={isMutateError}
        isLoading={isMutateLoading}
        isSuccess={isMutateSuccess}
        isIdle={isIdle}
        onSubmit={onSubmit}
        pose={data!.data}
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={cn("", className)}>
        {content}
      </DialogContent>
    </Dialog>
  );
};
