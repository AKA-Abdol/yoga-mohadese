import { FC, useCallback } from "react";
import Button from "./Button";
import useCustomLocation from "../../hooks/useCustomLocation";
import { useNavigate } from "react-router-dom";
import { ButtonGroupProps } from "src/types/components/ui";

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
      <div className={`flex w-full justify-center py-sm h-[10%]`}>
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
      <div className={`w-full h-[90%]`}>{props.data[activeButtonIndex]}</div>
    </div>
  );
};

export default ButtonGroup;
