"use client";
import { PoseCard, useGetPoseById } from "@/entities/pose";
import { Dialog, DialogContent } from "@/shared/ui/dialog";
import LoaderSpinner from "@/shared/ui/spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AssanasModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data, isLoading, isError } = useGetPoseById({
    id: +id,
  });
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function onDismiss() {
    router.back();
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onDismiss();
    }
  };

  let content;

  if (isLoading && !data) {
    content = <LoaderSpinner />;
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = (
      <PoseCard className="border-none" pose={data!.data} />
    );
  }

  return createPortal(
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>{content}</DialogContent>
    </Dialog>,
    document.getElementById("modals")!
  );
}
