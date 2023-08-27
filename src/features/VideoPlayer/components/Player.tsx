import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { VideoContext } from "../VideoContext";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { ITermApi } from "../types";
import Loading from "src/components/ui/Loading";
import MOCK_VIDEO from "src/assets/videos/mock-video.mp4";

const Player: FC = (props) => {
  const [videoState, setVideoState] = useState<"play" | "pause">("pause");
  const [seenTime, setSeenTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const CountUpSeenTime = () => {
    setSeenTime((prevTime) => prevTime + 1);
  };

  console.log("now: ", seenTime);

  useEffect(() => {
    if (videoState === "pause") return;

    const interval = setInterval(CountUpSeenTime, 1000);
    return () => clearInterval(interval);
  }, [videoState]);

  useEffect(() => {
    videoRef.current?.pause();
  }, [videoRef]);

  const toggleVideoState = useCallback(() => {
    if (!videoRef.current) return;
    if (videoState === "pause") {
      console.log("playing now: ", videoRef.current);
      setVideoState("play");
      videoRef.current?.play();
    } else {
      console.log("Pausing now: ", videoRef.current);

      setVideoState("pause");
      videoRef.current?.pause();
    }
  }, [videoState]);

  useEffect(() => {
    const handleSpacePress = (e: KeyboardEvent) => {
      if (e.key === " ") toggleVideoState();
    };
    window.addEventListener("keypress", handleSpacePress);

    return () => window.removeEventListener("keypress", handleSpacePress);
  }, [toggleVideoState]);

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
      ref={videoRef}
      className={`w-full h-full object-contain`}
      controls
      controlsList="nodownload"
      poster={selectedSessionVideo[0].thumbnail}
      onClick={(e) => {
        e.preventDefault();
        toggleVideoState();
      }}
    >
      <source
        src={
          // selectedSessionVideo.length ? selectedSessionVideo[0].link : undefined
          MOCK_VIDEO
        }
        type="video/mp4"
      />
      {/* <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" /> */}
    </video>
  );
};

export default Player;
