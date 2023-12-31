import { FC, createContext, useCallback, useContext, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import classNames from "classnames";
import Player from "./components/Player";
import TermController from "./components/TermController";
import OpenCloseButton from "./components/Drawer/OpenCloseButton";
import { MyContext } from "src/components/layout/BodyLayout";

export const DrawerContext = createContext<{ onClose: () => void }>({
  onClose: () => {},
});

const VideoPlayer: FC = () => {
  const myContext = useContext(MyContext);
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
    <DrawerContext.Provider value={{ onClose: closeDrawerState }}>
      <div className={classNames("w-screen", "relative", "bg-black")}>
        <Drawer show={drawerShowState === "show"}>
          <TermController title={`سلام ${myContext.firstname} عزیز`} />
        </Drawer>
        <div className="fixed top-2 left-0 p-sm z-[80]">
          <OpenCloseButton
            onToggle={toggleDrawerState}
            show={drawerShowState === "show"}
          />
        </div>
        <Player drawerShowState={drawerShowState} />
      </div>
    </DrawerContext.Provider>
  );
};

export default VideoPlayer;
