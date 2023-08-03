import { FC, useCallback, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import classNames from "classnames";
import Player from "./components/Player";
import TermController from "./components/TermController";
import VideoContextProvider from "./VideoContext";
import OpenCloseButton from "./components/Drawer/OpenCloseButton";

const VideoPlayer: FC = () => {
  const [drawerShowState, setDrawerShowState] = useState<"show" | "hidden">(
    "show"
  );

  const toggleDrawerState = useCallback(() => {
    setDrawerShowState((prevState) =>
      prevState === "show" ? "hidden" : "show"
    );
  }, []);

  const closeDrawerState = useCallback(() => {
    setDrawerShowState("hidden");
  }, []);

  return (
    <VideoContextProvider>
      <div className={classNames("w-full h-full", "relative", "bg-black")}>
        <Drawer show={drawerShowState === "show"}>
          <TermController title="سلام کاربر محدثه" />
        </Drawer>
        <div className="absolute top-0 right-0 p-sm z-10">
          <OpenCloseButton
            onToggle={toggleDrawerState}
            show={drawerShowState === "show"}
          />
        </div>
        <Player />
      </div>
    </VideoContextProvider>
  );
};

export default VideoPlayer;
