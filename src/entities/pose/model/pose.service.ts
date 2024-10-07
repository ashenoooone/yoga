import {
  $api,
  PAGINATION_DEFAULT_PARAMS,
  PaginationRequestType,
  PaginationResponseType,
} from "@/shared/api";
import { PoseShortType } from "./types";
import { AxiosResponse } from "axios";

export type GetPosesResponseType = {
  poses: PoseShortType[];
} & PaginationResponseType;

export class PoseService {
  static async getPoses(
    params: PaginationRequestType = PAGINATION_DEFAULT_PARAMS
  ): Promise<AxiosResponse<GetPosesResponseType>> {
    return $api.get("poses", {
      params,
    });
  }
}
