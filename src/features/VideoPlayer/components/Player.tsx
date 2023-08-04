import { FC, useContext } from "react";
import { VideoContext } from "../VideoContext";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { ITermApi } from "../types";
import Loading from "src/components/ui/Loading";

const Player: FC = (props) => {
  const videoContext = useContext(VideoContext);
  const term = useQuery({
    queryKey: [
      "session-video",
      videoContext.selected.termId,
      videoContext.selected.sessionNum,
    ],
    queryFn: api.get<{ course: ITermApi & WithVideos }>(
      `${BASE_TERM_URL}/${videoContext.selected.termId}`
    ),
  });

  if (!videoContext.selected.termId)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-primary-light">ترمی برای شما وجود ندارد</p>
      </div>
    );

  if (!videoContext.selected.sessionNum)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-primary-light">یک جلسه انتخاب کنید!</p>
      </div>
    );

  if (term.isLoading || term.isError)
    return <Loading textColor="primary-light" />;

  const selectedSessionVideo = term.data.course.videos.filter(
    (video) => video.num === videoContext.selected.sessionNum
  );

  return (
    <video
      className={`w-full h-full object-contain`}
      controls
      controlsList="nodownload"
    >
      <source
        src={
          selectedSessionVideo.length ? selectedSessionVideo[0].link : undefined
        }
        type="video/mp4"
      />
      {/* <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" /> */}
    </video>
  );
};

export default Player;
