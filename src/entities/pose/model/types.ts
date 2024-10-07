export type PoseType = {
  id: number;
  source_title: string;
  image: string | null;
  description: string;
  other_titles: OtherTitle[];
  short_description: string | null;
};

export type OtherTitle = {
  id: number;
  id_pose: number;
  title: string;
};

export type PoseShortType = Pick<
  PoseType,
  "id" | "source_title" | "image" | "short_description"
>;
