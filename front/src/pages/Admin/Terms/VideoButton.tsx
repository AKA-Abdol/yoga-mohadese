import { FC } from "react";
import VideoBtn from "../../../assets/images/video-btn.png";
import { VideoButtonProps } from "./types";

const VideoButton: FC<VideoButtonProps> = (props) => {
  return (
    <button
      className={`h-full w-full object-contain ${props.classnames}`}
      onClick={props.onClick}
    >
      <img
        src={VideoBtn}
        alt="edit"
        className={`h-full w-full object-contain`}
      />
    </button>
  );
};

export default VideoButton;
