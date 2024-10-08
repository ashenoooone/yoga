"use client";
import {
  ShortPoseList,
  useGetPoses,
} from "@/entities/pose";
import { Page } from "@/shared/ui/page";
import { PaginationComponent } from "@/shared/ui/pagination";
import LoaderSpinner from "@/shared/ui/spinner";
import { useState } from "react";

export default function AssanasPage() {
  const [currentPage, setCurrentPage] = useState<number>(0);

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

  return (
    <Page>
      <ShortPoseList
        asLink
        shortPoses={data?.data.poses ?? []}
      />
      <PaginationComponent
        className="mt-auto"
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
        totalPages={data?.data.all_pages ?? 10}
      />
    </Page>
  );
}
