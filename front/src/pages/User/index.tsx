import { FC, useContext, useEffect, useState } from "react";
import VideoContextProvider from "src/features/VideoPlayer/VideoContext";
import UserPanelButtons from "./components/UserPanelButtons";
import classNames from "classnames";
import NavMenu from "src/components/ui/NavMenu/NavMenu";
import Button from "react-multi-date-picker/components/button";
import { tokenPersistor } from "src/persistors/auth";
import LogOut from "src/assets/svgs/LogOut";
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "src/components/layout/BodyLayout";
import RemainedDays from "src/features/VideoPlayer/components/TermController/RemainedDays";
import GraduationHat from "src/assets/svgs/GraduationHat";

const User: FC = () => {
  const [userPanelRoute, setUserPanelRoute] = useState<string>("activeterms");
  const navigate = useNavigate();
  const contextData = useContext(MyContext);

  return (
    <VideoContextProvider>
      <main
        className={classNames(
          "w-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden",
          "flex flex-col items-center",
        )}
      >
        <div className="bg-[#E9C3B4] w-full">
          <div
            className={classNames(
              "w-full flex items-center justify-between py-md pl-6 pr-4"
            )}
          >
            <div className="relative">
              <NavMenu />
            </div>
            <Button
              className="border-none text-base text-brown flex items-center gap-2 p-0 m-0 h-fit min-h-fit max-h-fit"
              onClick={() => {
                tokenPersistor.delete();
                navigate("/");
              }}
            >
              خروج
              <LogOut />
            </Button>
          </div>
          <p className="text-brown text-xl pr-8">{`سلام ${contextData.firstname} عزیز`}</p>
          {userPanelRoute === "activeterms" && <RemainedDays />}
          <UserPanelButtons
            pages={["دوره های فعال"]}
            routes={["activeterms"]}
            svgs={[<GraduationHat />]}
            setUserPanelRoute={setUserPanelRoute}
          />
        </div>
        <Outlet />
      </main>
    </VideoContextProvider>
  );
};

export default User;
