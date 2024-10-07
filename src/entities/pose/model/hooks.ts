import { useQuery } from "react-query";
import { PoseService } from "./pose.service";

export const USE_GET_POSES_QUERY_KEY = "poses";

export const useGetPoses = (
  params: Parameters<typeof PoseService.getPoses>[0]
) => {
  return useQuery({
    queryKey: [
      USE_GET_POSES_QUERY_KEY,
      params?.count,
      params?.page,
    ],
    queryFn: () => PoseService.getPoses(params),
  });
};
