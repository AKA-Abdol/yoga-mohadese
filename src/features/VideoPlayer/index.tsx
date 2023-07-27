import { FC, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import OpenCloseButton from "./components/Drawer/OpenCloseButton";
import classNames from "classnames";

const VideoPlayer: FC = () => {
  const [drawerShow, setDrawerShow] = useState(true);
  const toggleDrawerShow = () => setDrawerShow((prevState) => !prevState);
  return (
    <div className={classNames("w-full h-full bg-black")}>
      <Drawer show={drawerShow}>
        
      </Drawer>
      <OpenCloseButton defaultShow={true} onToggle={toggleDrawerShow} />
    </div>
  );
};

export default VideoPlayer;
