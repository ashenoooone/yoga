"use client";

import { PoseCard, useGetPoseById } from "@/entities/pose";
import { Page } from "@/shared/ui/page";
import LoaderSpinner from "@/shared/ui/spinner";

export default function Assan(props: {
  params: { id: string };
}) {
  const { params } = props;

  const { data, isLoading, isError } = useGetPoseById({
    id: +params.id,
  });

  let content;

  if (isLoading && !data) {
    content = <LoaderSpinner />;
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = <PoseCard className="" pose={data!.data} />;
  }

  return <Page>{content}</Page>;
}
