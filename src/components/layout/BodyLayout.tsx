import { FC } from "react";
import { Outlet } from "react-router-dom";

const BodyLayout: FC = () => {
  return (
    <div className={"w-full h-screen bg-green-300 text-black"}>
      <Outlet />
    </div>
  );
};

export default BodyLayout;