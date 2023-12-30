import React, { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import Button from "react-multi-date-picker/components/button";
import { useNavigate } from "react-router-dom";
import useCustomLocation from "src/hooks/useCustomLocation";

interface IUserPanelButtons {
  pages: Array<string>;
  routes: Array<string>;
  setUserPanelRoute: React.Dispatch<React.SetStateAction<string>>;
}

const UserPanelButtons: React.FC<IUserPanelButtons> = ({
  pages,
  routes,
  setUserPanelRoute,
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
    <div>
      {pages.map((pages, index) => (
        <Button
          className={`btn-primary-theme w-28 mr-2 ${
            endPath === routes[index] && "btn-primary-active"
          }`}
          onClick={handleButtonClick(routes[index])}
          key={`nav-${routes[index]}`}
        >
          {pages}
        </Button>
      ))}
    </div>
  );
};

export default UserPanelButtons;
