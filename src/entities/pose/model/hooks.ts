import { useMutation, useQuery } from "react-query";
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

export const USE_GET_POSE_BY_ID = "pose";
export const useGetPoseById = (
  params: Parameters<typeof PoseService.getPoseById>[0]
) => {
  return useQuery({
    queryKey: [USE_GET_POSES_QUERY_KEY, params.id],
    enabled: params.id !== undefined,
    queryFn: () => PoseService.getPoseById(params),
  });
};

export const usePostPredictPoseByPhoto = () => {
  return useMutation({
    mutationFn: (
      params: Parameters<
        typeof PoseService.predictPoseByPhoto
      >[0]
    ) => PoseService.predictPoseByPhoto(params),
  });
};
