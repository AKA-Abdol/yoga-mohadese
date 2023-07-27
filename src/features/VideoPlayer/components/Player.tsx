import { FC } from "react";
import HomeButton from "src/components/ui/HomeButton";

const Player: FC = () => {
  return (
    <div className={`w-full h-full relative`}>
      <div className="absolute top-0 left-0 z-50">
        <HomeButton />
      </div>
      <video
        className={`w-full h-full object-contain`}
        controls
        controlsList="nodownload"
      >
        <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" />
      </video>
    </div>
  );
};

export default Player;
