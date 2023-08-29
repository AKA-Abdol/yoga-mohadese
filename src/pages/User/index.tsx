import { FC } from "react";
import VideoPlayer from "src/features/VideoPlayer";
import VideoContextProvider from "src/features/VideoPlayer/VideoContext";

const User: FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full lg:w-1/2 bg-black">
        <VideoContextProvider>
          <VideoPlayer />
        </VideoContextProvider>
      </div>
    </div>
  );
};

export default User;
