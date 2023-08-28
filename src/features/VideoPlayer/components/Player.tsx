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
import classNames from "classnames";
import Hls from "hls.js";

const Player: FC = (props) => {
  const [videoState, setVideoState] = useState<"play" | "pause">("pause");
  const [seenTime, setSeenTime] = useState(1);
  const [lastSeen, setLastSeen] = useState(0);
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

  const CountUpSeenTime = useCallback(() => {
    const videoCurrentTime = videoRef.current?.currentTime ?? -2;
    if (Math.abs(videoCurrentTime - lastSeen) >= 0.1) {
      setSeenTime((prevTime) => (prevTime + 1) % 60);
      setLastSeen(videoCurrentTime);
    }
  }, [lastSeen]);

  console.log(`now: ${seenTime}-${lastSeen}`);

  const toggleVideoState = useCallback(() => {
    if (!videoRef.current) return;
    if (videoState === "pause") {
      videoRef.current.play();
      setVideoState("play");
    } else {
      videoRef.current.pause();
      setVideoState("pause");
    }
  }, [videoState]);

  useEffect(() => {
    if (!term.data || !videoContext.selected.sessionNum || !videoRef.current)
      return;

    const selectedSessionVideo = term.data.course.videos.filter(
      (video) => video.num === videoContext.selected.sessionNum
    )[0];

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(selectedSessionVideo.link);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("ready to play!");
      });
    } else {
      alert("Use Modern Browsers!");
    }
  }, [term.data, videoContext, videoRef]);

  useEffect(() => {
    if (videoState === "pause") return;

    const interval = setInterval(CountUpSeenTime, 1000);
    return () => clearInterval(interval);
  }, [videoState, CountUpSeenTime]);

  useEffect(() => {
    videoRef.current?.pause();
  }, [videoRef]);

  useEffect(() => {
    const handleSpacePress = (e: KeyboardEvent) => {
      if (e.key === " ") toggleVideoState();
    };
    window.addEventListener("keypress", handleSpacePress);

    return () => window.removeEventListener("keypress", handleSpacePress);
  }, [toggleVideoState]);

  useEffect(() => {
    if (seenTime === 0) console.log("request for 1 min watch!");
  }, [seenTime]);

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

  return (
    <>
      <video
        ref={videoRef}
        className={`w-full h-full object-contain peer`}
        controls
        controlsList="nodownload"
        onPlay={() => setVideoState("play")}
        onPause={() => setVideoState("pause")}
      />
      <VideoController onClick={toggleVideoState} />
    </>
  );
};

interface VideoControllerProps {
  onClick: () => void;
}
const VideoController = (props: VideoControllerProps) => {
  return (
    <div
      className={classNames(
        "absolute bottom-16 left-0 w-full h-full",
        "transition-opacity duration-500 delay-200",
        "opacity-0 hover:opacity-100",
        "lg:hidden"
      )}
      onClick={props.onClick}
    ></div>
  );
};

export default Player;
