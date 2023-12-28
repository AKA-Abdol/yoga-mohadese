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
import classNames from "classnames";
import Hls from "hls.js";
import { QualityItem } from "./Player.types";
import qualitySettingIcon from "src/assets/images/setting-icon.png";
import { TERM_VIDEO_URL } from "src/pages/Admin/Terms/[id]/videos/api.data";

interface IPlayer {
  drawerShowState: "show" | "hidden";
}

const Player: FC<IPlayer> = ({ drawerShowState }) => {
  const [videoState, setVideoState] = useState<"play" | "pause">("play");
  const [seenTime, setSeenTime] = useState(1);
  const [lastSeen, setLastSeen] = useState(0);
  const [qualities, setQualities] = useState<QualityItem[]>([]);
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

  useEffect(() => {
    if (drawerShowState === "show" && videoState === "play") toggleVideoState();
  }, [drawerShowState]);

  const CountUpSeenTime = useCallback(() => {
    const videoCurrentTime = videoRef.current?.currentTime ?? -2;
    if (Math.abs(videoCurrentTime - lastSeen) >= 0.1) {
      setSeenTime((prevTime) => (prevTime + 1) % 60);
      setLastSeen(videoCurrentTime);
    }
  }, [lastSeen]);

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

  const acknowledgeMinuteView = useCallback(() => {
    if (!term.data || !videoContext.selected.sessionNum) return;

    const selectedSessionVideo = term.data.course.videos.filter(
      (video) => video.num === videoContext.selected.sessionNum
    )[0];
    api.post(`${TERM_VIDEO_URL}/${selectedSessionVideo.id}/view_count`)({});
  }, [videoContext, term.data]);

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
        // console.log("ready to play!");
        // console.log(hls.levels);
        setQualities([
          ...hls.levels.map((level, index) => ({
            name: `${level.height}p`,
            onClick: () => (hls.currentLevel = index),
          })),
          {
            name: "خودکار",
            onClick: () => (hls.currentLevel = -1),
          },
        ]);
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = selectedSessionVideo.link;
      videoRef.current.addEventListener("loadedmetadata", () =>
        console.log("ready to play!")
      );
    } else {
      alert("مرورگر خود را به روزرسانی کنید.");
    }
  }, [term.data, videoContext]);

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
      if (e.key === " " && drawerShowState === "hidden") toggleVideoState();
    };
    window.addEventListener("keypress", handleSpacePress);
    return () => window.removeEventListener("keypress", handleSpacePress);
  }, [toggleVideoState]);

  useEffect(() => {
    if (seenTime === 0) {
      acknowledgeMinuteView();
    }
  }, [seenTime, acknowledgeMinuteView]);

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
  )[0];

  return (
    <>
      <video
        ref={videoRef}
        className={`max-w-[100vw] max-h-[100vh]  min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh] object-contain peer`}
        controls
        controlsList="nodownload"
        poster={selectedSessionVideo.thumbnail}
        onPlay={() => setVideoState("play")}
        onPause={() => setVideoState("pause")}
        autoPlay
      />
      <VideoController onClick={toggleVideoState} />
      <QualitySetting qualities={qualities} />
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
        "absolute bottom-16 left-0 w-screen h-screen min-w-screen min-h-screen",
        "transition-opacity duration-500 delay-200",
        "opacity-0 hover:opacity-100",
        "lg:hidden"
      )}
      onClick={props.onClick}
    ></div>
  );
};

interface QualitySettingProps {
  qualities: QualityItem[];
}
const QualitySetting = (props: QualitySettingProps) => {
  const [dropdownState, setDropdownState] = useState<"show" | "hidden">(
    "hidden"
  );
  const toggleDropdownState = useCallback(() => {
    setDropdownState((prevState) => (prevState === "show" ? "hidden" : "show"));
  }, []);
  return (
    <div className={classNames("absolute top-2 left-2 cursor-pointer", "flex")}>
      <ul
        tabIndex={0}
        className={classNames(
          "z-[1] menu p-2 shadow rounded-box w-20 bg-primary-light",
          dropdownState === "show" ? "block" : "hidden"
        )}
      >
        {props.qualities.map((quality) => (
          <li
            onClick={() => {
              quality.onClick();
              toggleDropdownState();
            }}
            key={`quality-${quality.name}`}
          >
            <a className="text-primary hover:text-primary-dark hover:bg-opacity-10 hover:bg-black">
              {quality.name}
            </a>
          </li>
        ))}
      </ul>
      <img
        src={qualitySettingIcon}
        alt="Quality"
        onClick={toggleDropdownState}
        className="w-14 h-14"
      />
    </div>
  );
};

export default Player;
