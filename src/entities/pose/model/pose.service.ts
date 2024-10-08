import {
  $api,
  PAGINATION_DEFAULT_PARAMS,
  PaginationRequestType,
  PaginationResponseType,
} from "@/shared/api";
import { PoseShortType, PoseType } from "./types";

export type GetPosesResponseType = {
  poses: PoseShortType[];
} & PaginationResponseType;

export class PoseService {
  static async predictPoseByPhoto(params: {
    photo: string;
  }) {
    return $api.post<PoseType>("network/predict", {
      image: params.photo,
    });
  }

  static async getPoseById(params: { id: number }) {
    return $api.get<PoseType>(`poses/${params.id}`);
  }

  static async getPoses(
    params: PaginationRequestType = PAGINATION_DEFAULT_PARAMS
  ) {
    return $api.get<GetPosesResponseType>("poses", {
      params,
    });
  }
}
