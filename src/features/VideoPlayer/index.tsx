import { FC } from "react";
// import MOCK_VIDEO from "src/assets/videos/mock-video.mp4";
import SideControl from "./components/SideControl";
import Modal from "./components/Modal";
import SessionList from "./components/SessionList";

const VideoPlayer: FC = () => {
  return (
    <div className={`w-full h-full relative`}>
      <Modal id="_modal_">
        <SessionList />
      </Modal>
      <SideControl modalId="_modal_"/>
      <video
        className={`w-full h-full object-contain`}
        controls
        controlsList="nodownload"
      >
        <source src={process.env.REACT_APP_TEST_VIDEO} type="video/mp4" />
        {/* <source src={MOCK_VIDEO} type="video/mp4" /> */}
      </video>
    </div>
  );
};

export default VideoPlayer;
