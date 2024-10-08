import { Badge } from "@/shared/ui/badge";
import { PoseType } from "../model/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { cn } from "@/shared/utils";

type PoseCardProps = {
  className?: string;
  pose: PoseType;
};

export const PoseCard = (props: PoseCardProps) => {
  const { className, pose } = props;

  if (!pose) {
    return (
      <Card
        className={cn("w-full max-w-md mx-auto", className)}
      >
        <CardContent>
          <Typography variant={"p"}>
            No pose data available.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn("w-full max-w-md mx-auto", className)}
    >
      <CardHeader>
        <CardTitle>{pose.source_title}</CardTitle>
      </CardHeader>
      <CardContent>
        {pose.image && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={pose.image}
              alt={pose.source_title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        )}
        {pose.other_titles &&
          pose.other_titles.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {pose.other_titles.map((title) => (
                <Badge key={title.id} variant="default">
                  {title.title}
                </Badge>
              ))}
            </div>
          )}
        {pose.short_description && (
          <Typography variant={"p"}>
            {pose.short_description}
          </Typography>
        )}
        <Typography variant={"p"}>
          {pose.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
