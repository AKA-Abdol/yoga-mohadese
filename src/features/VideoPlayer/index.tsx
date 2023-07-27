import { FC, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import OpenCloseButton from "./components/Drawer/OpenCloseButton";
import classNames from "classnames";
import Player from "./components/Player";
import TermController from "./components/TermController";

const VideoPlayer: FC = () => {
  const [drawerShow, setDrawerShow] = useState(true);
  const toggleDrawerShow = () => setDrawerShow((prevState) => !prevState);
  return (
    <div className={classNames("w-full h-full", "relative", "bg-black")}>
      <Drawer show={drawerShow}>
        <TermController />
      </Drawer>
      <div className="absolute top-0 right-0 p-sm">
        <OpenCloseButton defaultShow={true} onToggle={toggleDrawerShow} />
      </div>
      <Player />
    </div>
  );
};

export default VideoPlayer;
