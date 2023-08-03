import { FC, useContext } from "react";
import SessionList from "../SessionList";
import RemainedDays from "./RemainedDays";
import { useQuery } from "@tanstack/react-query";
import { VideoContext } from "../../VideoContext";
import { ITermApi } from "../../types";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import api from "src/services";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";

const TermData: FC = () => {
  const videoContext = useContext(VideoContext);
  const term = useQuery({
    queryKey: ["term-data", videoContext.selected.termId],
    queryFn: api.get<{ course: ITermApi & WithVideos }>(
      `${BASE_TERM_URL}/${videoContext.selected.termId}`
    ),
  });
  return (
    <div className="h-full w-full flex flex-col space-y-lg">
      <SessionList term={term} />
      <RemainedDays term={term} />
    </div>
  );
};

export default TermData;
