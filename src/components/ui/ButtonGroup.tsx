import { ButtonGroupProps } from "@/types/components/ui";
import { FC, useCallback, useState } from "react";
import { Button } from "./Button";
import useCustomLocation from "../../hooks/useCustomLocation";
import { useNavigate } from "react-router-dom";

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const [basePath, endPath] = useCustomLocation();
  const activeButtonIndex = props.routes.findIndex(
    (route) => route === endPath
  );
  const navigate = useNavigate();
  const handleButtonClick = useCallback(
    (path: string) => {
      return () => {
        navigate(`${basePath}/${path}`);
      };
    },
    [basePath, navigate]
  );

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className={`flex w-full justify-center py-sm`}>
        {props.buttonNames.map((buttonName, index) => (
          <Button
            className={`btn-primary-theme w-28 mr-2 ${
              endPath === props.routes[index] && "btn-primary-active"
            }`}
            onClick={handleButtonClick(props.routes[index])}
          >
            {buttonName}
          </Button>
        ))}
      </div>
      <div className={`w-full h-full`}>{props.data[activeButtonIndex]}</div>
    </div>
  );
};

export default ButtonGroup;
