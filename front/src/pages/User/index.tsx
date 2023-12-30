import { FC, useContext, useEffect, useState } from "react";
import VideoContextProvider from "src/features/VideoPlayer/VideoContext";
import UserPanel from "./components/UserPanelButtons";
import classNames from "classnames";
import NavMenu from "src/components/ui/NavMenu/NavMenu";
import Button from "react-multi-date-picker/components/button";
import { tokenPersistor } from "src/persistors/auth";
import LogOut from "src/assets/svgs/LogOut";
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "src/components/layout/BodyLayout";
import RemainedDays from "src/features/VideoPlayer/components/TermController/RemainedDays";

const User: FC = () => {
  const [userPanelRoute, setUserPanelRoute] = useState<string>("activeterms");
  const navigate = useNavigate();
  const contextData = useContext(MyContext);

  return (
    <VideoContextProvider>
      <main
        className={classNames(
          "min-h-screen overflow-y-auto",
          "flex flex-col items-center space-y-sm",
          "bg-white w-full"
        )}
      >
        <div className="bg-[#D48B7180] w-full">
          <div
            className={classNames(
              "w-full flex items-center justify-between py-4 pl-6 pr-4"
            )}
          >
            <div className="relative">
              <NavMenu />
            </div>
            <Button
              className="border-none text-base text-[#58423A] flex items-center p-0 m-0 h-fit min-h-fit max-h-fit"
              onClick={() => {
                tokenPersistor.delete();
                navigate("/");
              }}
            >
              خروج
              <LogOut />
            </Button>
          </div>
          <p className="text-[#58423A] text-xl pr-8">{`سلام ${contextData.firstname} عزیز`}</p>
          {userPanelRoute === "activeterms" && <RemainedDays />}
          <UserPanel
            pages={["فاکتورهای گذشته", "دوره های فعال"]}
            routes={["paymenthistory", "activeterms"]}
            setUserPanelRoute={setUserPanelRoute}
          />
        </div>
        <Outlet />
      </main>
    </VideoContextProvider>
  );
};

export default User;
