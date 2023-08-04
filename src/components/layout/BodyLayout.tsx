import { useQuery } from "@tanstack/react-query";
import { FC, createContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { tokenPersistor } from "src/persistors/auth";
import api from "src/services";
import { WithId } from "src/types/base";

export const MyContext = createContext<{ firstname: string }>({
  firstname: "",
});

const BodyLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const myData = useQuery({
    queryKey: ["my-data", location],
    queryFn: api.get<{
      user: { firstname: string; is_admin: boolean } & WithId;
    }>(`user/my`),
    retry: 1,
  });

  if (
    myData.isError &&
    (location.pathname.startsWith("/admin") ||
      location.pathname.startsWith("/user"))
  ) {
    tokenPersistor.delete();
    navigate("/auth");
  }

  if (myData.isSuccess) {
    if (
      myData.data.user.is_admin && location.pathname.startsWith("/auth")
    )
      navigate("/admin");
    if (!myData.data.user.is_admin && location.pathname.startsWith("/auth"))
      navigate("/user");
  }

  if (
    myData.isSuccess &&
    !myData.data.user.is_admin &&
    location.pathname.startsWith("/admin")
  )
    navigate("/user");

  return (
    <MyContext.Provider
      value={{ firstname: myData.data?.user.firstname ?? "" }}
    >
      <div className={"w-full h-screen bg-primary text-black"}>
        <Outlet />
      </div>
    </MyContext.Provider>
  );
};

export default BodyLayout;
