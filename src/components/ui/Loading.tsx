import classNames from "classnames";
import { FC } from "react";
import { LoadingProps } from "src/types/components/ui";

const Loading: FC<LoadingProps> = (props) => {
  return (
    <span
      className={classNames(
        "loading loading-infinity",
        props.textColor ? `text-${props.textColor}` : "text-primary-dark",
        props.size ? `loading-${props.size}` : "loading-lg"
      )}
    />
  );
};

export default Loading;
