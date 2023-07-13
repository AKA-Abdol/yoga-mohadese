import { ButtonGroupProps } from "@/types/components/ui";
import { FC, useCallback, useState } from "react";
import { Button } from "./Button";

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const handleButtonClick = useCallback((index: number) => {
    return () => {
      setActiveButton(index);
    };
  }, []);

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className={`flex w-full justify-center py-sm`}>
        {props.buttonNames.map((buttonName, index) => (
          <Button
            className={`btn-primary-theme w-28 mr-2 ${
              activeButton === index && "btn-primary-active"
            }`}
            onClick={handleButtonClick(index)}
          >
            {buttonName}
          </Button>
        ))}
      </div>
      <div className={`w-full h-full`}>{props.data[activeButton]}</div>
    </div>
  );
};

export default ButtonGroup;
