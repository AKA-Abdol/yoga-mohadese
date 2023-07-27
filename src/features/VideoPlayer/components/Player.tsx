import { FC } from "react";

const Player: FC = () => {
  return (
    <video
      className={`w-full h-full object-contain`}
      controls
      controlsList="nodownload"
    >
      <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" />
    </video>
  );
};

export default Player;
