import { FC } from "react";
import { ButtonProps } from "src/types/components/ui";

const Button: FC<ButtonProps> = (props) => {
  // const preventDefaultOnClick = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();
  //     if (props.onClick) props.onClick(event);
  //   },
  //   [props]
  // );
  return (
    <button
      className={`btn btn-outline ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
