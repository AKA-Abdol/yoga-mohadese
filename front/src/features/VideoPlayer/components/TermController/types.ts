import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { ITermApi } from "../../types";
import { UseQueryResult } from "@tanstack/react-query";

export interface TermControllerProps {
  title?: string;
}

export interface WithTerm {
  term: UseQueryResult<
    {
      course: ITermApi & WithVideos;
    },
    unknown
  >;
}
