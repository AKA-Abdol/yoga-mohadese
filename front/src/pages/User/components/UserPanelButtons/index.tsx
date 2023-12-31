import React, { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import Button from "react-multi-date-picker/components/button";
import { useNavigate } from "react-router-dom";
import useCustomLocation from "src/hooks/useCustomLocation";

interface IUserPanelButtons {
  pages: Array<string>;
  routes: Array<string>;
  svgs: Array<ReactNode>;
  setUserPanelRoute: React.Dispatch<React.SetStateAction<string>>;
}

const UserPanelButtons: React.FC<IUserPanelButtons> = ({
  pages,
  routes,
  setUserPanelRoute,
  svgs,
}) => {
  const [basePath, endPath] = useCustomLocation();
  const navigate = useNavigate();
  const handleButtonClick = useCallback(
    (path: string) => {
      return () => {
        setUserPanelRoute(path);
        navigate(`${basePath}/${path}`);
      };
    },
    [basePath, navigate]
  );

  return (
    <div className="flex flex-nowrap gap-2 mt-2 mb-4 mr-4 overflow-y-auto">
      {pages.map((pages, index) => (
        <Button
          className={`btn-user-panel-controller w-28 mr-2 ${
            endPath === routes[index] && "btn-user-panel-controller-active"
          } `}
          onClick={handleButtonClick(routes[index])}
          key={`nav-${routes[index]}`}
        >
          {svgs[index]}
          {pages}
        </Button>
      ))}
    </div>
  );
};

export default UserPanelButtons;
