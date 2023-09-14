import { useLocation } from "react-router-dom";

const useCustomLocation = () => {
  const location = useLocation();
  const path = location.pathname;
  const splittedPath = path.split("/");
  const endLocation = splittedPath.pop() as string;
  const baseLocation = splittedPath.join("/");
  return [baseLocation, endLocation];
};

export default useCustomLocation;
