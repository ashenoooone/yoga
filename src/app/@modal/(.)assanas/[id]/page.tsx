"use client";
import { Dialog, DialogContent } from "@/shared/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AssanasModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
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

  return createPortal(
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>{id}</DialogContent>
    </Dialog>,
    document.getElementById("modals")!
  );
}
