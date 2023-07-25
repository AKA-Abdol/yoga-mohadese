import { FC } from "react";
// import MOCK_VIDEO from "src/assets/videos/mock-video.mp4";
import SideControl from "./components/SideControl";
import Modal from "./components/Modal";
import SessionList from "./components/SessionList";
import SessionInfo from "./components/SessionInfo";

const VideoPlayer: FC = () => {
  return (
    <div className={`w-full h-full relative`}>
      <Modal id="session_modal">
        <SessionList />
      </Modal>
      <Modal id="info_modal" className="md:w-1/2">
        <SessionInfo
          session={{ num: 2, title: "عنوان جلسه" }}
          term={{ level: "سطح A", month: "آبان", title: "عنوان ترم" }}
        />
      </Modal>
      <SideControl
        sessionListModalId="session_modal"
        infoModalId="info_modal"
      />
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
