"use client";
import {
  PoseShortType,
  ShortPoseList,
  useGetPoses,
} from "@/entities/pose";
import { Page } from "@/shared/ui/page";
import { PaginationComponent } from "@/shared/ui/pagination";
import LoaderSpinner from "@/shared/ui/spinner";
import { useState } from "react";
import { EditPoseDialog } from "./_components/edit-pose-dialog/ui/edit-pose-dialog";

export default function Admin() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentEditPose, setCurrentEditPose] =
    useState<PoseShortType | null>(null);

  const { data, isLoading, isError } = useGetPoses({
    count: 10,
    page: currentPage,
  });

  if (isLoading) {
    return <LoaderSpinner centered />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const onEditClick = (shortPose: PoseShortType) => {
    setCurrentEditPose(shortPose);
  };

  const onOpenChangeDialog = (open: boolean) => {
    if (!open) {
      setCurrentEditPose(null);
    }
  };

  return (
    <Page>
      <ShortPoseList
        onEditClick={onEditClick}
        shortPoses={data?.data.poses ?? []}
      />
      <PaginationComponent
        className="mt-auto"
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
        totalPages={data?.data.all_pages ?? 10}
      />
      {currentEditPose && (
        <EditPoseDialog
          shortPose={currentEditPose}
          isOpen={!!currentEditPose}
          onOpenChange={onOpenChangeDialog}
        />
      )}
    </Page>
  );
}
