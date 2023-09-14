import { IVideo, WithThumbnail } from "src/pages/Admin/Terms/[id]/videos/types";
import { WithId } from "src/types/base";

export interface SessionItemProps {
  data: IVideo & WithId & WithThumbnail;
}
