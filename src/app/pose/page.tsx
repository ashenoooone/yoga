"use client";
import { Page } from "@/shared/ui/page";
import { LoadPhotoForm } from "./_components/load-photo";
import {
  PoseCard,
  usePostPredictPoseByPhoto,
} from "@/entities/pose";

export default function LoadPose() {
  const { data, isError, isLoading, mutate, isSuccess } =
    usePostPredictPoseByPhoto();

  const onSubmit = (base64File: string) => {
    mutate({
      photo: base64File,
    });
  };

  return (
    <Page className="flex-row">
      <LoadPhotoForm
        isError={isError}
        onSubmit={onSubmit}
        isUploading={isLoading}
        isSuccess={isSuccess}
      />
      {data && (
        <PoseCard
          className="border-none"
          pose={data?.data}
        />
      )}
    </Page>
  );
}
