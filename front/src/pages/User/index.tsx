import { FC } from "react";
import VideoPlayer from "src/features/VideoPlayer";
import VideoContextProvider from "src/features/VideoPlayer/VideoContext";

const User: FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full bg-black">
        <VideoContextProvider>
          <VideoPlayer />
        </VideoContextProvider>
      </div>
    </div>
  );
};

export default User;
