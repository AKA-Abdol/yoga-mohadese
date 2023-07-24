import { FC } from "react";

const VideoPlayer: FC = () => {
  return (
    <div className={`w-full h-full`}>
      <video className={`w-full h-full object-contain`} controls controlsList="nodownload">
        <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
